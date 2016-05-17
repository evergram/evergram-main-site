(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('ConnectCompleteController', ConnectCompleteController);

    ConnectCompleteController.$inject = ['UserService','$location'];
    function ConnectCompleteController(UserService, $location) {
        /*jshint unused: false*/
        var vm = this;
        vm.user = {};
        var querystring = $location.search();

        if (!!querystring.id) {
        	// TODO: Need to explain to user what account they're now associated with
        	UserService.findById(querystring.id)
        		.then( function(user,err) {

        			if (!!err) {
	        			//something went wrong, show an error?
	        			return $location.url('/connect?err=' + encodeURIComponent(err));
	        		}

        			if (!user) {
        				// user not found
        				return $location.url('/connect?err=' + encodeURIComponent("Oops, looks like we couldn't find your Pixy account. Contact us for help."));
        			} else {
        				vm.user = user;	// apply user to the view model
        			}
        		});
        }
    }
})();
