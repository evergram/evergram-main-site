(function() {
    'use strict';

    angular
        .module('pixy',
        ['ngCookies', 'ngTouch', 'restangular', 'ui.router', 'ui.bootstrap.showErrors',
            'angular-stripe', 'credit-cards', 'cgBusy', 'duScroll', 'snap', 'angulartics', 'angulartics.segment']);
})();
