(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('SignupStep2Controller', SignupStep2Controller);

    SignupStep2Controller.$inject = ['$scope', '$location', 'pixyConfig', 'UserService'];
    function SignupStep2Controller($scope, $location, pixyConfig, UserService) {
        var vm = this;

        // bindings for directives to ensure they are valid
        this.forms = {
            customerDetails: {},
            addressDetails: {},
            paymentDetails: {}
        };

        var plan = pixyConfig.PLANS.DEFAULT;
        var querystring = $location.search();

        // if there's a user id, fetch the user
        if (!!querystring.id) {
            UserService.findById(querystring.id).then(function(user) {
                vm.user = user;
            });
        }

        // check for a plan in the querystring
        if (!!querystring[pixyConfig.QUERYSTRING.PLAN]) {
            plan = querystring[pixyConfig.QUERYSTRING.PLAN];
        }

        /**
         * Complete the signup process by checking all form validations, submitting the payments etc.
         */
        vm.complete = function() {
            angular.forEach(this.forms, function(form) {
                if (!!form.validate) {
                    form.validate();
                }
            });
            //$scope.$broadcast('show-errors-reset');
            // validate customer
            // validate address
            // validate payment

            // submit payment

            // update user
        };
    }
})();
