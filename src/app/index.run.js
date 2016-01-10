(function() {
    'use strict';

    angular
        .module('pixy')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $log) {

        $log.debug('runBlock end');
    }

})();
