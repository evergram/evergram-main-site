(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('FailedController', FailedController);

    FailedController.$inject = ['pixyConfig'];
    function FailedController(pixyConfig) {
        var vm = this;
        vm.plans = [
            pixyConfig.PLANS.PAYG,
            pixyConfig.PLANS.UNLIMITED,
            pixyConfig.PLANS.GIFT
        ];
    }
})();
