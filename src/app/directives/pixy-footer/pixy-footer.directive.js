(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('pixyFooter', NavDirective);

    function NavDirective() {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/directives/pixy-footer/pixy-footer.directive.html'
        }
    }
})();
