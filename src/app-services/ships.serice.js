(function () {
    'use strict';

    angular
        .module('app')
        .factory('ShipsService', ShipsService);

    ShipsService.$inject = ['$http', '$q'];
    function ShipsService($http, $q) {
        var service = {};

        service.Starship = Starship;

        return service;

        function Starship(username, password, callback) {
            var deferred = $q.defer();
            
            $http({
              url: 'https://swapi.co/api/starships',
              method: "GET",
              headers: {
                Authorization: 'none'
              }
            }).then(function (success){
              deferred.resolve(success);
            },function (error){
              deferred.reject(error);
            });
           
            return deferred.promise;
        }
    }

})();