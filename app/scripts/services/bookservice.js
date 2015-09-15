'use strict';

/**
 * @ngdoc service
 * @name bcsgApp.BookService
 * @description
 * # BookService
 * Service in the bcsgApp.
 */
angular.module('bcsgApp')
  .service('BookService', function (Config, $http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
      get : function(term){

        if (!term)
          return false;

        return $http.jsonp(Config.api.url, {
          params: {
            'callback' : 'JSON_CALLBACK',
            'limit' : Config.api.defaultLimit,
            'country' : Config.api.defaultCountry,
            'media' : Config.api.mediaType.EBOOK,
            'term' : term
          }
        });
      }
    };

  });
