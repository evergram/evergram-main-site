(function() {
    'use strict';

    angular
        .module('pixy')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('signup-step-1', {
                url: '/signup-step-1',
                templateUrl: 'app/controllers/signup-step-1/signup-step-1.html',
                controller: 'SignupStep1Controller',
                controllerAs: 'step1'
            })
            .state('signup-step-2', {
                url: '/signup-step-2',
                templateUrl: 'app/controllers/signup-step-2/signup-step-2.html',
                controller: 'SignupStep2Controller',
                controllerAs: 'step2'
            })
            .state('home', {
                url: '/',
                templateUrl: 'app/controllers/home/home.html',
                controller: 'SignupStep1Controller',
                controllerAs: 'home'
            });

        $urlRouterProvider.otherwise('/');
    }
})();
