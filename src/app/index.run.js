(function() {
    'use strict';

    angular
        .module('pixy')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log) {
        $log.debug('runBlock end');
    }

})();
