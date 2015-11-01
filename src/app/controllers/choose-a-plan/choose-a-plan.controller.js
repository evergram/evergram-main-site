(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('ChoosePlanController', ChoosePlanController);

    ChoosePlanController.$inject = ['pixyConfig'];
    function ChoosePlanController(pixyConfig) {
        var vm = this;
        vm.plans = [
            pixyConfig.PLANS.PAYG,
            pixyConfig.PLANS.UNLIMITED,
            pixyConfig.PLANS.GIFT
        ];
    }
})();
