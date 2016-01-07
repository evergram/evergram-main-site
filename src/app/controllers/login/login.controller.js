(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['pixyConfig','$location','$window','$sanitize'];

    function LoginController(pixyConfig, $location, $window, $sanitize) {
        /*jshint unused: false*/
        var vm = this;

        vm.err = {};

        var querystring = $location.search();

        if (!!querystring.err) {

        	var error = $window.decodeURIComponent(querystring.err);

            if (error === "User account not found") {

            	vm.err = {
            		error: error,
            		message: 'We couldn\'t find a Pixy account connected to the Instagram details provided. ' + 
            				'<b>New to Pixy?</b> <a href="/choose-a-plan">Check out our awesome plans</a>.'
            	};

            }

        } else {
            // do nothing
        }
    }
})();