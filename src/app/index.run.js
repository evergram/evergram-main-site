(function() {
    'use strict';

    angular
        .module('pixy')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $anchorScroll) {
        // scroll to top when route changes.
        $rootScope.$on('$stateChangeStart', function() {
            $anchorScroll();
        });
    }

})();
