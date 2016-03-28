(function() {
    'use strict';

    angular
        .module('pixy')
        .factory('ReferringUserService', ReferringUserService);

    /**
     * A wrapper service for detecting a referral. Gets referring_user from querystring and verifies/gets referring user's details from Pixy Customer db.
     */
    ReferringUserService.$inject = ['$location','pixyConfig'];
    function ReferringUserService($location,pixyConfig) {

        var service = {};
        service.getFromQueryString = getFromQueryString;
        service.get = get;

        return service;

        function getFromQueryString() {
            var querystring = $location.search();
            return querystring.referring_user;
        }

        function get(code) {
            if (!!pixyConfig.REFERRINGUSER[code]) {
                return pixyConfig.REFERRINGUSER[code];
            }

            return false;
        }
        // TODO: Update to use a new API endpoint to verify and get user data.
    }
})();
