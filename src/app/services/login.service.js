(function() {
    'use strict';

    angular
        .module('pixy')
        .service('LoginService', LoginService);

	LoginService.$inject = ['$modal', '$rootScope'];
    function LoginService($modal, $rootScope) {
	
		function assignCurrentUser (user) {
		    $rootScope.currentUser = user;
		    return user;
		}

		return function() {
		    var instance = $modal.open({
				templateUrl: 'controllers/Login-modal.controller.html',
				controller: 'LoginModalController',
				controllerAs: 'LoginModalController'
			});

		    return instance.result.then(assignCurrentUser);
		};
	}
})();
