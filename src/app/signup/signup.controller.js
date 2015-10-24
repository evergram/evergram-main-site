(function() {
    'use strict';

    angular
        .module('pixy')
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$location', 'UserService'];
    function SignupController($location, UserService) {
        var vm = this;
        var querystring = $location.search();

        // if there's a user id, fetch the user
        if (!!querystring.id) {
            UserService.findById(querystring.id).then(function(user) {
                vm.user = user;
            });
        }
    }
})();
