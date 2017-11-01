(function () {
    'use strict';

    angular
        .module('app')
        .controller('ShipsController', ShipsController)
        .component('customMdList', {
            templateUrl: 'ships/ship.component.view.html',
            controllerAs: "vm",
            controller: "ShipsController",
        });

    function ShipsController(ShipsService) {
        var vm = this;

        vm.list = [];
        vm.limit = 5;
        vm.more = more;
        initController();

        function initController() {
            ShipsService.Starship()
            .then(function (result) {
                console.log(result.data);
                vm.list = result.data.results;
            });
        }

        function more(){
            vm.limit += vm.limit;
        }

    }

    ShipsController.$inject = ['ShipsService'];

})();