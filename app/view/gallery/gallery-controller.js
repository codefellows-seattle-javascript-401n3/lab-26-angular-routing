'use strict';

require('./gallery.scss');

module.exports = ['$log', GalleryController];

function GalleryController($log) {
  $log.debug('GalleryController');
  this.title = 'I am the GalleryController, this is my title.'
};
