(function() {
    'use strict';

    angular
        .module('pixy')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state('signup', {
                url: '/signup',
                templateUrl: 'app/signup/signup.html',
                controller: 'SignupController',
                controllerAs: 'signup'
            });

        $urlRouterProvider.otherwise('/');
    }
})();
