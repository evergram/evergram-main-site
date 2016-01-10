(function() {
    'use strict';
    angular
        .module('pixy')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $anchorScroll) {
        $rootScope.$on('$stateChangeStart', function() {
            $anchorScroll();
        });
    }
})();
