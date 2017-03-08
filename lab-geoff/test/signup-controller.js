require('../app/entry.js');
require('angular-mocks');
let angular = require('angular');

describe('signup controller', function() {

  let signupCtrl = null;

  beforeEach( () => {
    angular.mock.module('routesApp');
    angular.mock.inject( $controller => {
      signupCtrl = new $controller('SignupController');
    });
  });

  describe('initial properties', function() {
    it('it should have the title sign up', function() {
      expect(signupCtrl.title).toBe('sign up');
    });
  });

});