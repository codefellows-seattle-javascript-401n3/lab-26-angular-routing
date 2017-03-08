require('./home-style.scss');

module.exports = ['$log', HomeController];

function HomeController($log) {
  $log.debug('HomeController');

  this.title = 'home';
}