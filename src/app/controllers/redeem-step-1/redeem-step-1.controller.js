(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('RedeemStep1Controller', RedeemStep1Controller);

    RedeemStep1Controller.$inject =
        [
            'PlanService',
            'TrackingService'
        ];
    function RedeemStep1Controller(planService,
                                   trackingService) {
        /*jshint unused: false*/
        var vm = this;

        trackingService.signupStarted(
            planService.getFromQueryString() || planService.getDefault()
        );
    }
})();
