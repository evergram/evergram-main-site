(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['pixyConfig'];
    function HomeController(pixyConfig) {
        /*jshint unused: false*/
        var vm = this;

        vm.reauthUrl = pixyConfig.API_ENDPOINT +
            '/auth/instagram?action=reauth';

        vm.redeemUrl = '/redeem-step-1?plan=' + encodeURIComponent('PROMO-LIMIT-10');
    }
})();
