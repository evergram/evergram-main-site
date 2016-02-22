(function() {
    'use strict';

    angular
        .module('pixy')
        .factory('TrackingService', TrackingService);

    TrackingService.$inject = ['$q', 'Restangular', '$analytics','$window','$location'];
    function TrackingService($q, restangular, $analytics, $window, $location) {
        var ENDPOINT = '/events';
        var service = {};

        service.signedUp = signedUp;
        service.signupStarted = signupStarted;
        service.trackPageView = trackPageView;

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

        function signupStarted(plan) {
            // TODO work out how to get a callback / promise that the event is tracked.
            $analytics.eventTrack('Start signup', {
                plan: plan.code
            });
        }

        // page view tracking for GA
        function trackPageView() {
            $window.ga('send', 'pageview', { page: $location.url() });
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
