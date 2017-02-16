'use strict'

require('./gallery.scss')

module.exports = ['$log', GalleryController]

function GalleryController ($log) {
  $log.debug('Called GalleryController')
  let self = this
  self.title = 'Welcome to the Gallery Page'
}
