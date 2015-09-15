'use strict';

describe('Directive: tabContent', function () {

  // load the directive's module
  beforeEach(module('bcsgApp'));

  var element,
    scope,
    httpBackend,
    BookService;

  beforeEach(inject(function ($rootScope, $injector, $compile, _$httpBackend_) {
    scope = $rootScope.$new();
    httpBackend = _$httpBackend_;
    BookService = $injector.get('BookService');


    var success = function(func) {
      return func({results:[
        {book : 1}, {book : 2}
      ]});
    };

    spyOn(BookService, 'get').and.returnValue({success: success});

    httpBackend.whenGET('views/tabContent.html').respond('<div>this is the tabContent directive</div>');


  }));

  beforeEach(inject(function ($rootScope, $injector, $compile, _$httpBackend_) {
    element = angular.element('<tab-content></tab-content>');
    element = $compile(element)(scope);
    httpBackend.flush();
    scope.$digest();
  }));

  afterEach (function () {
    httpBackend.verifyNoOutstandingExpectation ();
    httpBackend.verifyNoOutstandingRequest ();
  });

  it('should make hidden element visible', inject(function () {
    expect(element.text()).toBe('this is the tabContent directive');
  }));

  it('should call the book service and retrieve a list of books', function () {
    expect(BookService.get).toHaveBeenCalled();

    expect(element.isolateScope().books.length).toBe(2);
  });
});
