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
                                    '$uibModal'];

    function MyAccountController(pixyConfig, 
                                 $scope, 
                                 userService, 
                                 imageSetService, 
                                 $log, 
                                 $location, 
                                 $uibModal) {
        
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

        } else {
            return $location.url('/login?err=' + encodeURIComponent('No id found in querystring'));
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
        };
    }
})();
