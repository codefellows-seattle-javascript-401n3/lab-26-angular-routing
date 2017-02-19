
require('./gallery.scss');

module.exports = ['$log', galleryController];

function galleryController($log) {
  $log.debug(galleryController);
  this.title = 'Gallery Page';
}
