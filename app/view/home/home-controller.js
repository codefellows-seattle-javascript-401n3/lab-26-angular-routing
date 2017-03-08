'use strict';

require('./home.scss');

module.exports = ['$log', HomeController];

function HomeController($log) {
  $log.debug('HomeController');
  this.title = 'I am the HomeController, this is my title.';
};
