'use strict';

const angular = require('angular');
// const expect = require('karma-jasmine');

describe('testing signupCtrl', function(){
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  it('should return the signupCtrl title', () => {
    expect(this.signupCtrl.title).toBe('signup data-bound');
  });
});
