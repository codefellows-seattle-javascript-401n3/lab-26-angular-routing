'use strict';

require('./gallery.scss');

module.exports = ['$log', GalleryController];

function GalleryController($log) {
  $log.debug('doing GalleryController stuff');
  this.title = 'Gallery data-bound';
}
