(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('pixyMobileNav', PixyMobileNavDirective);

    function PixyMobileNavDirective() {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/directives/pixy-mobile-nav/pixy-mobile-nav.directive.html'
        };
    }
})();
