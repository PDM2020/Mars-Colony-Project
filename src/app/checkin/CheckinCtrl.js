(function() {
  'use strict';

  angular
    .module('red')
    .controller('CheckinCtrl', CheckinCtrl);

  /** @ngInject */
  function CheckinCtrl($scope, $http) {

  var JOBS_GET_URL =
  'https://red-wdp-api.herokuapp.com/api/mars/jobs';

  var COLONIST_POST_URL =
  'https://red-wdp-api.herokuapp.com/api/mars/colonists';

//placeholder object
$scope.colonist = {};

  $http({
      method: 'GET',
      url: JOBS_GET_URL,
      }).then(function(response){
        $scope.jobs = response.data.jobs;
      }, function(error){
      });

$scope.login = function(event){
  event.preventDefault();

  $http({
      method: 'POST',
      url: COLONIST_POST_URL,
      data: {
        "colonist": $scope.colonist
      }
      }).then(function(response){
        console.log(response);
      }, function(error){
      console.log(error);
      });
  };
}
})();
