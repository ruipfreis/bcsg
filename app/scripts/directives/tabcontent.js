'use strict';

/**
 * @ngdoc directive
 * @name bcsgApp.directive:tabContent
 * @description
 * # tabContent
 */
angular.module('bcsgApp')
  .directive('tabContent', function (BookService) {
    return {
      templateUrl: 'views/tabContent.html',
      restrict: 'E',
      scope: {},
      link: function (scope, element, attrs) {
        BookService.get(attrs.term).success(function(data){
          scope.books = data.results;
        });
      }
    };
  });
