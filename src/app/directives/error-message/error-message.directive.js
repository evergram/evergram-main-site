(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('errorMessage', ErrorMessageDirective);

    ErrorMessageDirective.$inject =
        [
            '$document'
        ];
    function ErrorMessageDirective($document) {
        return {
            restrict: 'EA',
            scope: {
                message: '=message',
                scrollToTop: '@'
            },
            templateUrl: 'app/directives/error-message/error-message.directive.html',
            controller: ['$scope', '$element',
                function($scope, $element) {
                    $scope.$watch('message', function(newValue) {
                        if (!!newValue) {
                            $document.scrollToElementAnimated($element);
                        }
                    });
                }
            ]
        };
    }
})();
