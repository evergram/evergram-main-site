(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('SignupStep1Controller', SignupStep1Controller);

    SignupStep1Controller.$inject =
        [
            'PlanService',
            'TrackingService'
        ];
    function SignupStep1Controller(planService,
                                   trackingService) {
        /*jshint unused: false*/
        var vm = this;

        trackingService.signupStarted(
            planService.getFromQueryString() || planService.getDefault()
        );
    }
})();
