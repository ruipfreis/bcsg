'use strict';

/**
 * @ngdoc function
 * @name bcsgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bcsgApp
 */
angular.module('bcsgApp')
  .controller('MainCtrl', function ($scope, BookService, Config) {

    $scope.tabs = Config.tabs;

    $scope.showTab = Config.tabs[Object.keys(Config.tabs)[0]];

    /*    BookService.get('heminway').success(function(data){
          $scope.books = data.results;
          console.log(data.results);
        });*/

    $scope.setTab = function(tab){
      $scope.showTab = tab;
    };

    $scope.isTab = function(tab){
      return $scope.showTab === tab;
    };
  });
