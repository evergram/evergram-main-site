(function() {
    'use strict';

    angular
        .module('pixy')
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('choose-a-plan', {
                url: '/choose-a-plan',
                templateUrl: 'app/controllers/choose-a-plan/choose-a-plan.html',
                controller: 'ChoosePlanController',
                controllerAs: 'choose'
            })
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
            .state('redeem-step-2', {
                url: '/redeem-step-2',
                templateUrl: 'app/controllers/redeem-step-2/redeem-step-2.html',
                controller: 'RedeemStep2Controller',
                controllerAs: 'redeem'
            })
            .state('signup-complete', {
                url: '/signup-complete',
                templateUrl: 'app/controllers/signup-complete/signup-complete.html',
                controller: 'SignupCompleteController',
                controllerAs: 'complete'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/controllers/login/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            }) 
            .state('my-account', {
                url: '/my-account',
                templateUrl: 'app/controllers/my-account/my-account.html',
                controller: 'MyAccountController',
                controllerAs: 'myAccount',
                data: {
                    requireLogin: true
                }
            })
            .state('failed', {
                url: '/failed',
                templateUrl: 'app/controllers/failed/failed.html',
                controller: 'FailedController',
                controllerAs: 'home'
            });

        $urlRouterProvider.otherwise('/choose-a-plan');
    }
})();
