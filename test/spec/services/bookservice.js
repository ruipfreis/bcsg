'use strict';

describe('Service: BookService', function () {

  // load the service's module
  beforeEach(module('bcsgApp'));

  // instantiate service
  var BookService, $httpBackend;
  beforeEach(inject(function (_BookService_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    BookService = _BookService_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should do something', function () {
    expect(!!BookService).toBe(true);
  });

  it('should load the menu json', function() {
    var resultData = {'resultCount': 2, 'results': [
      {
        trackId: '1',
        price: '1.45',
        trackViewUrl: 'http://bookUrl.com',
        trackName: 'book 1'
      },
      {
        trackId:'2',
        price: '1.50',
        trackViewUrl: 'http://book2Url.com',
        trackName: 'book 2'
      }]
    };
    ///\/data\/menu.json?.*/
    $httpBackend.expectJSONP(/https:\/\/itunes.apple.com\/search?.*/).respond(function(/* method, url */) {
      return [200, resultData];
    });
    BookService.get('term').success(function (data) {
      expect(data.resultCount).toBe(resultData.resultCount);
      expect(data.results.length).toBe(resultData.results.length);
      expect(data.results[0].trackId).toBe(resultData.results[0].trackId);
    });
    $httpBackend.flush();
  });

});
