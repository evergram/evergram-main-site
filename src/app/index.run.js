(function() {
    'use strict';

    angular
        .module('pixy')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $log, $state) {

    	/*
    	// force login for routes where data.requireLogin = true
		$rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

		    var requireLogin = toState.data.requireLogin;

		    if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
		      event.preventDefault();
		      // get me a login modal!

		      //$state.go('/login', toParams);
		      
		    }
		});*/

        $log.debug('runBlock end');
    }

})();
