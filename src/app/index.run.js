(function() {
    'use strict';
    angular
        .module('pixy')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $anchorScroll) {
        // force login for routes where data.requireLogin = true
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            var requireLogin = toState.data.requireLogin;

            // ensure that we scroll to the top after state change
            $anchorScroll();

            if (requireLogin && typeof $rootScope.currentUser === 'undefined') {
                event.preventDefault();
                // get me a login modal!
                // $state.go('/login', toParams);
            }
        });
    }
})();
