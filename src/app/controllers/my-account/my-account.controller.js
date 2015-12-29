(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('MyAccountController', MyAccountController);

    MyAccountController.$inject = ['pixyConfig',
                                    '$scope',
                                    'UserService',
                                    'ImageSetService',
                                    '$log',
                                    '$location',
                                    '$uibModal',
                                    'moment'];

    function MyAccountController(pixyConfig, 
                                 $scope, 
                                 userService, 
                                 imageSetService, 
                                 $log, 
                                 $location, 
                                 $uibModal, 
                                 moment) {
        
        var vm = this;

        vm.user = {};
        vm.imageSets = {};

       	var querystring = $location.search();

        if (!!querystring.id) {

            userService.findById(querystring.id).		// TODO: replace this with a $cookie based get.
	        then(function(user) {
	        	
	            vm.user = user;
                vm.user.signupCompletedOn = new Date(vm.user.signupCompletedOn);
                
	        }).
            then(function(){
                
                return imageSetService.getCurrent(vm.user._id);
            }).
            then(function(imageSets){

                vm.imageSets = imageSets;

            });

            // if user not found, redirect back to login with a failure message???

        } else {
            return handleError('No id found in querystring');
        }

        vm.editCustomerDetails = function() {

        	var modalInstance = $uibModal.open({
		      animation: $scope.animationsEnabled,
		      templateUrl: 'app/controllers/editCustomer.modal/editCustomer.modal.html',
		      controller: 'EditCustomerModal',
		      controllerAs: 'editCustomerModal',
		      resolve: {
		        user: function () {
		          return vm.user;
		        }
		      }
		    });
        }
    };
})();
