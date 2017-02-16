'use strict'

require('./lib/test-setup.js')
const angular = require('angular')

describe('Signup Controller', function () {

  beforeEach(() => {
    angular.mock.module('routingExampleModule')
    angular.mock.inject($controller => {
      this.signupCtrl = new $controller('SignupController')
    })
  })

  describe('Default Properties', () => {
    it('title is set correctly', () => {
      expect(this.signupCtrl.title).toBe('Welcome to the Signup Page')
    })
  })
})
