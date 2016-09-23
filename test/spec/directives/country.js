'use strict';

describe('Directive: country', function () {

  // load the directive's module
  beforeEach(module('graceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<country></country>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the country directive');
  }));
});
