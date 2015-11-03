(function() {
    'use strict';

    angular
        .module('pixy')
        .factory('UserService', UserService);

    UserService.$inject = ['$location', '$q', 'Restangular'];
    function UserService($location, $q, restangular) {
        var ENDPOINT = '/users';
        var service = {};

        service.findById = findById;
        service.create = create;
        service.findFromQueryString = findFromQueryString;

        return service;

        function findFromQueryString() {
            var querystring = $location.search();
            if (!!querystring.id) {
                return findById(querystring.id);
            } else {
                return $q.reject('No id found in querystring');
            }
        }

        function findById(id) {
            return restangular.one(ENDPOINT + '/' + id).get().then(handleSuccess,
                handleError('Error getting user by id'));
        }

        function create(data) {
            return restangular.all(ENDPOINT).post(data).then(handleSuccess, handleError('Error creating user'));
        }

        // private functions
        function handleSuccess(data) {
            data.address.country = 'AU'; // force australia
            return data;
        }

        function handleError(error) {
            return function() {
                return {
                    success: false,
                    message: error
                };
            };
        }
    }
})();
