(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('EditCustomerModal', EditCustomerModal);

    EditCustomerModal.$inject = ['pixyConfig','$uibModalInstance','$log','user','Notification'];

    function EditCustomerModal(pixyConfig, $uibModalInstance, $log, user, Notification) {
        
        var vm = this;

        vm.error = '';
        
        // bindings for directives to ensure they are valid
        vm.forms = {
            customerDetails: {},
            addressDetails: {}
        };

        vm.user = user;


        vm.save = function () {
            // if all valid
            if (isValid()) {
                // update user
                vm.user.put().
                then(function(){

                    Notification.success({message: 'Ok, got it. Your new details have been saved.'});
                    $uibModalInstance.close();
                
                });
            } else {
                setErrorMessage('Oops, looks like you missed something. Please complete all form fields');
            }
        };

        vm.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
        


        function isValid() {
            // call validate on all forms to show/hide errors
            angular.forEach(vm.forms, function(form) {
                if (!!form.validate) {
                    form.validate();
                }
            });

            // if all valid
            return vm.forms.customerDetails.isValid() &&
                vm.forms.addressDetails.isValid();
        }

        function setErrorMessage(err) {
            
            Notification.error({message: err});
            //vm.error = message;
        }

    }
})();
