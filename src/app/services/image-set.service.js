(function() {
    'use strict';

    angular
        .module('pixy')
        .factory('ImageSetService', ImageSetService);

    ImageSetService.$inject = ['$q', 'Restangular'];
    function ImageSetService($q, restangular) {
        var service = {};

        service.getAll = getAll;
        service.getCurrent = getCurrent;
        service.getById = getById;

        return service;

        function getAll(userid) {
            if (!!userid) {
                return restangular.one('/users/' + userid + '/image-sets').get().then(handleSuccess,
                    handleError);
            } else {
                return handleError('No userid provided');
            }
        }

        function getCurrent(userid) {
            if (!!userid) {
                return restangular.one('/users/' + userid + '/image-sets/current').get().then(handleSuccess,
                    handleError);
            } else {
                return handleError('No userid provided');
            }
        }

        function getById(userid, id) {
            if (!!userid && !!id) {
                return restangular.one('/users/' + userid + '/image-sets/' + id).get().then(handleSuccess,
                    handleError);
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
