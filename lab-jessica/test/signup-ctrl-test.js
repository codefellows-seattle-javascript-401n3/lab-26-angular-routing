'use strict';

// require('./lib/test-setup.js');

// const angular = require('angular');

describe('Signup Controller', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('initial properties', () => {
    it('title property should equal SIGNUP', () => {
      expect(this.signupCtrl.title).toEqual('SIGNUP');
    });
  });

});
