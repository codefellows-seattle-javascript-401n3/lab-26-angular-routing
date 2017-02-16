'use strict'

require('./lib/test-setup.js')
const angular = require('angular')

describe('Gallery Controller', function () {

  beforeEach(() => {
    angular.mock.module('routingExampleModule')
    angular.mock.inject($controller => {
      this.galleryCtrl = new $controller('GalleryController')
    })
  })

  describe('Default Properties', () => {
    it('title is set correctly', () => {
      expect(this.galleryCtrl.title).toBe('Welcome to the Gallery Page')
    })
  })
})
