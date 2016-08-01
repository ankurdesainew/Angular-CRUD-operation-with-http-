'use strict';

/**
 * @ngdoc function
 * @name gitHubReposApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gitHubReposApp
 */
angular.module('Crud')
.controller('PersonController', PersonControllerFn);
PersonControllerFn.$inject = ['employeeService'];

function PersonControllerFn(employeeService) {


  var personVm = this;
  personVm.deleteEmployee = deleteEmployee;
  personVm.addEmployee = addEmployee;

init();

function init(){
  employeeService
    .getEmployees()
    .then(function(result) {
      personVm.users = result;
    }, function(error) {
      console.dir(error);
    });
}


  function deleteEmployee(position) {
    personVm.users.splice(position, 1);
  }

  function addEmployee() {
    personVm.newEmp.id = personVm.users.length + 1;
    personVm.users.push(personVm.newEmp);
    personVm.newEmp = null;
  }




}

;
