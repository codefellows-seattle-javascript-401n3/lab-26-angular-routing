'use strict';

require('../app/entry.js');
require('angular-mocks')
var angular = require('angular');

describe('Signup Controller', function() {
  beforeEach(() => {
    angular.mock.module('routesApp');
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController');
    });
  });

  describe('title property', () => {
    it('title property should equal Sign Up', () => {
      expect(this.signupCtrl.title).toBe('Sign Up');
    });
  });

});
