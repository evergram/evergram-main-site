(function() {
    'use strict';

    angular
        .module('pixy',
        ['ngCookies', 'ngTouch', 'restangular', 'mgcrea.ngStrap', 'ui.router', 'ui.bootstrap.showErrors',
            'angular-stripe', 'credit-cards', 'cgBusy', 'duScroll', 'angulartics', 'angulartics.segment']);
})();
