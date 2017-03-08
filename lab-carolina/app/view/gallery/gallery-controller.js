'use strict';

require('./gallery.scss');

module.exports = ['$log', GalleryController];
function GalleryController($log) {
  $log.debug('GalleryController');
  this.title = 'This is the gallery page';

}
