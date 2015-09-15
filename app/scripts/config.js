'use strict';

/**
 * @ngdoc service
 * @name bcsgApp.Config
 * @description
 * # Config
 * Constant in the bcsgApp.
 */

//country=gb&term=heminway&media=ebook&limit=10
angular.module('bcsgApp')
  .constant('Config', {
    api : {
      url : 'https://itunes.apple.com/search',
      defaultCountry : 'gb',
      defaultLimit : '10',
      mediaType : {
        EBOOK : 'ebook'
      }
    },

    tabs : {
      Hemingway : 'hemingway',
      Dickens : 'dickens',
      Shakespeare : 'shakespeare'
    }
  });
