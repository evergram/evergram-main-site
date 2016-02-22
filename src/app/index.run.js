(function() {
    'use strict';
    angular
        .module('pixy')
        .run(['$rootScope', '$anchorScroll', 'TrackingService',
            function runBlock($rootScope, $anchorScroll, TrackingService) {
                $rootScope.$on('$stateChangeStart', function() {
                    $anchorScroll();
                });
                $rootScope.$on('$stateChangeSuccess', function() {
                    TrackingService.trackPageView();
                });
            }]);
})();
