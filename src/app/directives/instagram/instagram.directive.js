(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('instagram', InstagramDirective);

    function InstagramDirective() {
        return {
            restrict: 'EA',
            scope: {
                redirectTo: '@',
                buttonImgSrc: '@'
            },
            templateUrl: 'app/directives/instagram/instagram.directive.html',
            controller: ['$scope', '$location', '$window', '$httpParamSerializer', 'pixyConfig',
                function($scope, $location, $window, $httpParamSerializer, pixyConfig) {
                    var redirectUrl;
                    var plan = pixyConfig.PLANS.DEFAULT;

                    // check for a plan in the querystring
                    var querystring = $location.search();
                    if (!!querystring[pixyConfig.QUERYSTRING.PLAN]) {
                        plan = querystring[pixyConfig.QUERYSTRING.PLAN];
                    }

                    /**
                     * Sets the redirect url based on the passed url and the config endpoint.
                     *
                     * @param url
                     */
                    this.setRedirectUrl = function(url) {
                        redirectUrl = pixyConfig.SITE_ENDPOINT + pixyConfig.SITE_HASHBANG + url;
                    };

                    /**
                     * Redirects to instagram with the redirect url set.
                     */
                    $scope.connect = function() {
                        var params = {};
                        params[pixyConfig.QUERYSTRING.REDIRECT_URL] = redirectUrl;
                        params[pixyConfig.QUERYSTRING.PLAN] = plan;

                        var instagramUrl = pixyConfig.API_ENDPOINT +
                            pixyConfig.INSTAGRAM_ENDPOINT +
                            '?' +
                            $httpParamSerializer(params);

                        $window.location.href = instagramUrl;
                    };
                }],
            link: function(scope, iElement, attrs, ctrl) {
                ctrl.setRedirectUrl(attrs.redirectTo);
            }
        };
    }
})();
