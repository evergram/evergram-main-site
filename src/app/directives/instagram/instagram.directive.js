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
                    var referringUser;
                    var plan = pixyConfig.PLANS.DEFAULT;
                    var id;

                    // check for a plan in the querystring
                    var querystring = $location.search();
                    if (!!querystring[pixyConfig.QUERYSTRING.PLAN]) {
                        plan = querystring[pixyConfig.QUERYSTRING.PLAN];
                    }

                    // check for a referring user in the querystring
                    if (!!querystring[pixyConfig.QUERYSTRING.REFERRING_USER]) {
                        referringUser = querystring[pixyConfig.QUERYSTRING.REFERRING_USER];
                    }

                    // check for a user id in the querystring (used for connect/change instagram username)
                    if (!!querystring[pixyConfig.QUERYSTRING.ID]) {
                        id = querystring[pixyConfig.QUERYSTRING.ID];
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
                        redirectUrl = pixyConfig.SITE_ENDPOINT + pixyConfig.SITE_HASHBANG + url;
                    };

                    /**
                     * Redirects to instagram with the redirect url set.
                     */
                    $scope.connect = function() {
                        var params = {};
                        params[pixyConfig.QUERYSTRING.REDIRECT_URL] = redirectUrl;

                        if (!!referringUser) {
                            params[pixyConfig.QUERYSTRING.REFERRING_USER] = referringUser;
                        }

                        if (!!id) {
                            params[pixyConfig.QUERYSTRING.ID] = id;
                        }

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
