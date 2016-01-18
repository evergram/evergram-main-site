(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('SignupStep2Controller', SignupStep2Controller);

    SignupStep2Controller.$inject =
        [
            'lodash',
            '$state',
            '$q',
            'PaymentService',
            'PlanService',
            'TrackingService',
            'UserService'
        ];
    function SignupStep2Controller(lodash,
                                   $state,
                                   $q,
                                   paymentService,
                                   planService,
                                   trackingService,
                                   userService) {
        var vm = this;
        var plan = planService.getFromQueryString() || planService.getDefault();
        var deferred = $q.defer();

        vm.user = {};
        vm.card = {
            number: '',
            exp_month: '',
            exp_year: '',
            cvc: ''
        };
        vm.error = '';
        vm.submitButtonSpinnerVisible = false;
        vm.overlay = deferred.promise;

        // bindings for directives to ensure they are valid
        vm.forms = {
            customerDetails: {},
            addressDetails: {},
            paymentDetails: {}
        };

        // set the overlay promise
        userService.findFromQueryString().
        then(function(user) {
            vm.user = user;

            // set the user plan
            vm.user.billing.option = plan.code;

            if (!!vm.user.signupComplete) {
                // redirect
                $state.go('signup-complete');
                return;
            } else {
                deferred.resolve();
            }
        }).
        catch(function() {
            // redirect back to the beginning as something went wrong
            $state.go('home');
            return;
        });

        /**
         * Complete the signup process by checking all form validations, submitting the payments etc.
         */
        vm.complete = function() {
            resetErrorMessage();
            showButtonSpinner(true);
            vm.overlay = complete();
        };

        function complete() {
            var deferred = $q.defer();

            // if all valid
            if (isValid()) {
                // update user
                vm.user.put().
                then(function() {
                    // create payment token in stripe
                    return paymentService.createToken(vm.card, vm.user);
                }).
                then(function(response) {
                    // create/update stripe customer
                    if (!!vm.user.billing.stripeId && !lodash.isEmpty(vm.user.billing.stripeId)) {
                        return paymentService.updateCustomer(vm.user.billing.stripeId, vm.user, response.id);
                    }
                    return paymentService.createCustomer(vm.user, response.id);
                }).
                then(function(response) {
                    // save the details
                    vm.user.signupComplete = true;
                    vm.user.billing.stripeId = response.id;
                    return vm.user.put();
                }).
                then(function() {
                    // track event
                    return trackingService.signedUp(vm.user);
                }).
                then(function() {
                    // redirect
                    $state.go('signup-complete');
                }).
                catch(function(err) {
                    if (err.type && /^Stripe/.test(err.type)) {
                        setErrorMessage('Payment error: ' + (err.raw.message || err.message));
                    } else {
                        setErrorMessage('An error occurred: ' + err.message);
                    }
                    showButtonSpinner(false);
                    deferred.resolve();
                });
            } else {
                setErrorMessage('Please complete all form fields');
                showButtonSpinner(false);
                deferred.resolve();
            }

            return deferred.promise;
        }

        function isValid() {
            // call validate on all forms to show/hide errors
            angular.forEach(vm.forms, function(form) {
                if (!!form.validate) {
                    form.validate();
                }
            });

            // if all valid
            return vm.forms.customerDetails.isValid() &&
                vm.forms.addressDetails.isValid() &&
                vm.forms.paymentDetails.isValid();
        }

        function setErrorMessage(message) {
            vm.error = message;
        }

        function resetErrorMessage() {
            vm.error = '';
        }

        function showButtonSpinner(show) {
            vm.submitButtonSpinnerVisible = show;
        }
    }
})();
