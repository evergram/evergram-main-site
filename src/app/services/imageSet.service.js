(function() {
    'use strict';

    angular
        .module('pixy')
        .factory('ImageSetService', ImageSetService);

    ImageSetService.$inject = ['$location', '$q', 'Restangular', '$log'];
    function ImageSetService($location, $q, restangular, $log) {
        var ENDPOINT = '/imagesets';
        var service = {};

        service.getAll = getAll;
        service.getCurrent = getCurrent;
        service.getById = getById;

        return service;

        function getAll(userid) {

            if (!!userid) {
                return restangular.one(ENDPOINT + '/' + userid + '/all').get().then(handleSuccess, handleError);
            } else {
                return handleError('No userid provided');
            }
        }

        function getCurrent(userid) {

            $log.log(ENDPOINT + '/' + userid + '/current');

            if (!!userid) {
                return restangular.one(ENDPOINT + '/' + userid + '/current').get().then(handleSuccess, handleError);
            } else {
                return handleError('No userid provided');
            }
        }

        function getById(userid, id) {

            if (!!userid && !!id) {
                return restangular.one(ENDPOINT + '/' + userid + '/' + id).get().then(handleSuccess, handleError);
            } else {
                return handleError('No userid or imagesetid provided');
            }
        }

        // private functions
        function handleSuccess(data) {
            return data;
        }

        function handleError(error) {
            return $q.reject(error.data || error);
        }
    }
})();
