(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('SignupStep2Controller', SignupStep2Controller);

    SignupStep2Controller.$inject =
        ['document', '$document', '$location', '$state', '$q', 'pixyConfig', 'PaymentService', 'UserService'];
    function SignupStep2Controller(document, $document, $location, $state, $q, pixyConfig, paymentService,
                                   userService) {
        var vm = this;
        var errorEl = angular.element(document.getElementById('error-msg'));
        var plan = pixyConfig.PLANS.DEFAULT;
        var querystring = $location.search();
        var deferred = $q.defer();

        vm.user = {};
        vm.card = {
            number: '',
            exp_month: '',
            exp_year: '',
            cvc: ''
        };
        vm.error = '';
        vm.overlay = deferred.promise;

        // bindings for directives to ensure they are valid
        vm.forms = {
            customerDetails: {},
            addressDetails: {},
            paymentDetails: {}
        };

        // check for a plan in the querystring
        if (!!querystring[pixyConfig.QUERYSTRING.PLAN]) {
            plan = querystring[pixyConfig.QUERYSTRING.PLAN].code;
        }

        // if there's a user id, fetch the user
        if (!!querystring.id) {
            // set the overlay promise
            userService.findById(querystring.id).then(function(user) {
                vm.user = user;

                // set the user plan
                vm.user.billing.option = plan;

                if (!!vm.user.signupComplete) {
                    // redirect
                    $state.go('signup-complete');
                    return;
                } else {
                    deferred.resolve();
                }
            });
        } else {
            // redirect back to the beginning as something went wrong
            $state.go('home');
            return;
        }

        /**
         * Complete the signup process by checking all form validations, submitting the payments etc.
         */
        vm.complete = function() {
            resetErrorMessage();
            vm.overlay = complete();
        };

        function complete() {
            var deferred = $q.defer();

            // if all valid
            if (isValid()) {

                // update user
                vm.user.put().
                    then(function() {
                        // submit payment
                        return paymentService.createToken(vm.card, vm.user);
                    }).
                    then(function(response) {
                        // set the stripe id
                        vm.user.billing.stripeId = response.id;
                        return vm.user.put();
                    }).
                    then(function() {
                        // redirect
                        $state.go('signup-complete');
                    }).
                    catch(function(err) {
                        if (err.type && /^Stripe/.test(err.type)) {
                            setErrorMessage('Stripe error: ', err.message);
                        } else {
                            setErrorMessage('An error occurred: ' + err.message);
                        }
                        deferred.resolve();
                    });
            } else {
                setErrorMessage('Please complete all form fields');
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
            if (vm.forms.customerDetails.isValid() &&
                vm.forms.addressDetails.isValid() &&
                vm.forms.paymentDetails.isValid()) {
                return true;
            }
            return false;
        }

        function setErrorMessage(message) {
            vm.error = message;
            $document.scrollToElement(errorEl, 30, 1000);
        }

        function resetErrorMessage() {
            vm.error = '';
        }
    }
})();
