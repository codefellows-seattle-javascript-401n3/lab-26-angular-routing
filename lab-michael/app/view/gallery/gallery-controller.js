'use strict';

require('./gallery.scss');

module.exports = ['$log', GalleryController];

function GalleryController($log) {
  $log.debug('GalleryController');

  this.title= 'Welcome to the Gallery Page';
}
