'use strict'

require('./home.scss')

module.exports = ['$log', HomeController]

function HomeController ($log) {
  $log.debug('Called HomeController')
  let self = this
  self.title = 'Welcome to the Home Page'
}
