(function() {
    'use strict';

    angular
        .module('pixy')
        .factory('TrackingService', TrackingService);

    TrackingService.$inject = ['$q', 'Restangular'];
    function TrackingService($q, restangular) {
        var ENDPOINT = '/events';
        var service = {};

        service.signedUp = signedUp;

        return service;

        function signedUp(user) {
            var data = {
                data: {
                    relationships: {
                        user: {
                            data: {
                                type: 'user',
                                id: user._id
                            }
                        }
                    }
                }
            };

            return restangular.all(ENDPOINT + '/signed-up').
            post(data).
            then(handleSuccess, handleError);
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
