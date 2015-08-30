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
                templateUrl: 'app/signup/signup.html',
                controller: 'SignupController',
                controllerAs: 'signup'
            });

        $urlRouterProvider.otherwise('/');
    }
})();
