(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('pixySocialStrip', SocialStrip);

    function SocialStrip() {
        return {
            restrict: 'EA',
            scope: {},
            templateUrl: 'app/directives/pixy-social-strip/pixy-social-strip.directive.html'
        };
    }
})();
