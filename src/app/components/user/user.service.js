(function() {
    'use strict';

    angular
        .module('pixy')
        .factory('UserService', UserService);

    UserService.$inject = ['Restangular'];
    function UserService(Restangular) {
        var ENDPOINT = '/users';
        var service = {};

        service.findById = findById;
        service.create = create;

        return service;

        function findById(id) {
            return Restangular.one(ENDPOINT + '/' + id).get().then(handleSuccess,
                handleError('Error getting user by id'));
        }

        function create(data) {
            return Restangular.all(ENDPOINT).post(data).then(handleSuccess, handleError('Error creating user'));
        }

        // private functions
        function handleSuccess(data) {
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
