(function() {
    'use strict';

    angular
        .module('pixy')
        .directive('instagram', InstagramDirective);

    function InstagramDirective() {
        return {
            restrict: 'EA',
            scope: {
                action: '=',
                redirectTo: '@',
                buttonImgSrc: '@'
            },
            templateUrl: 'app/directives/instagram/instagram.directive.html',
            controller: ['$scope', '$location', '$window', '$httpParamSerializer', 'pixyConfig',
                function($scope, $location, $window, $httpParamSerializer, pixyConfig) {

                    var redirectUrl;
                    var action;
                    var plan = pixyConfig.PLANS.DEFAULT;

                    // check for a plan in the querystring
                    var querystring = $location.search();
                    if (!!querystring[pixyConfig.QUERYSTRING.PLAN]) {
                        plan = querystring[pixyConfig.QUERYSTRING.PLAN];
                    }

                    /**
                     * Sets the action (login or reauth) when provided and passes url and the config endpoint.
                     *
                     * @param action
                     */
                    this.setAction = function(attrAction) {
                        action = attrAction;
                    };

                    /**
                     * Sets the redirect url based on the passed url and the config endpoint.
                     *
                     * @param url
                     */
                    this.setRedirectUrl = function(url) {
                        redirectUrl = pixyConfig.SITE_ENDPOINT + '/#!/' + url;
                    };

                    /**
                     * Redirects to instagram with the redirect url set.
                     */
                    $scope.connect = function() {
                        var params = {};
                        params[pixyConfig.QUERYSTRING.REDIRECT_URL] = redirectUrl;

                        if (!!action) {
                            params[pixyConfig.QUERYSTRING.ACTION] = action;
                        } else {
                            // must be a signup auth so send plan in querystring
                            params[pixyConfig.QUERYSTRING.PLAN] = plan;
                        }

                        var instagramUrl = pixyConfig.API_ENDPOINT +
                            pixyConfig.INSTAGRAM_ENDPOINT +
                            '?' +
                            $httpParamSerializer(params);

                        $window.location.href = instagramUrl;
                    };
                }],
            link: function(scope, iElement, attrs, ctrl) {
                ctrl.setRedirectUrl(attrs.redirectTo);
                ctrl.setAction(attrs.action);
            }
        };
    }
})();
