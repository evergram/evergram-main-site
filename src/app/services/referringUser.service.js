(function() {
    'use strict';

    angular
        .module('pixy')
        .factory('ReferringUserService', ReferringUserService);

    /**
     * A wrapper service for detecting a referral. Gets referring_user from querystring and verifies/gets referring user's details from Pixy Customer db.
     */
    ReferringUserService.$inject = ['$location'];
    function ReferringUserService($location) {

        var service = {};
        service.getFromQueryString = getFromQueryString;

        return service;

        function getFromQueryString() {
            var querystring = $location.search();
            return querystring.referring_user;
        }

        // TODO: Update to use a new API endpoint to verify and get user data.
    }
})();
