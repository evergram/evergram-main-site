(function() {
    'use strict';

    angular
        .module('pixy')
        .factory('PlanService', PlanService);

    PlanService.$inject = ['$location', 'pixyConfig'];
    function PlanService($location, pixyConfig) {
        var service = {};

        service.get = get;
        service.getFromQueryString = getFromQueryString;
        service.getDefault = getDefault;

        return service;

        function getFromQueryString() {
            var querystring = $location.search();

            if (!!querystring[pixyConfig.QUERYSTRING.PLAN]) {
                return get(querystring[pixyConfig.QUERYSTRING.PLAN]);
            }
            return false;
        }

        function get(code) {
            if (!!pixyConfig.PLANS[code]) {
                return pixyConfig.PLANS[code];
            }

            return false;
        }

        function getDefault() {
            return pixyConfig.PLANS[pixyConfig.PLANS.DEFAULT];
        }
    }
})();
