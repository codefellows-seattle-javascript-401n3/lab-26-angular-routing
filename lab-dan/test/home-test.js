'use strict'

require('./lib/test-setup.js')
const angular = require('angular')

describe('Home Controller', function () {

  beforeEach(() => {
    angular.mock.module('routingExampleModule')
    angular.mock.inject($controller => {
      this.homeCtrl = new $controller('HomeController')
    })
  })

  describe('Default Properties', () => {
    it('title is set correctly', () => {
      expect(this.homeCtrl.title).toBe('Welcome to the Home Page')
    })
  })
})
