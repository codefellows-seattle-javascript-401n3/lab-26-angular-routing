'use strict'

require('./home.scss')

module.exports = ['$log', HomeController]

function HomeController($log) {
  $log.debug('home controller')

  this.title = 'Home Page'
}
