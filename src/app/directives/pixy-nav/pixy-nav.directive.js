(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('pixyNav', NavDirective);

    function NavDirective() {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/directives/pixy-nav/pixy-nav.directive.html'
        };
    }
})();
