'use strict'

require('./gallery.scss')

module.exports = ['$log', GalleryController]

function GalleryController($log) {
  $log.debug('gallery controller')

  this.title = 'Gallery Page'
}
