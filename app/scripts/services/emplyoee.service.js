(function(){
  'use strict';

  angular.module('Crud').service('employeeService',employeeServiceFn);

       employeeServiceFn.$inject = ['$q','$http'];

    function employeeServiceFn($q, $http){

      var self = this;

      self.getEmployees = getEmployees;


      function getEmployees(){
        var defer = $q.defer();

         $http
          .get('https://jsonplaceholder.typicode.com/users')
          .then(function(response){
            // console.log(response.data);
            defer.resolve(response.data);
          },function(ankur){
            //console.log(ankur);
            defer.reject(ankur.status);
          });

          return defer.promise;
      }



    }


})();
