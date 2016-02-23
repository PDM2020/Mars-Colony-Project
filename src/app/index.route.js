(function() {
  'use strict';

  angular
    .module('red')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
    });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        })
      .state('check-in',{
        url:'/check-in',
        templateUrl: 'app/checkin/check-in.html',
        controller: 'CheckinCtrl',
        })
      .state('encounters',{
        url:'/encounters',
        templateUrl: 'app/encounters/encounters.html',
        controller: 'EncountersCtrl',
        })
      .state('reports',{
        url:'/reports',
        templateUrl:'app/reports/reports.html',
        controller: 'ReportsCtrl'
        })
      .state('reports-filed',{
        url:'/reports-filed',
        templateUrl:'app/reports/reports-filed.html',
        controller: 'ReportsCtrl'
        });


    $urlRouterProvider.otherwise('/');
  }

})();
