'use strict'

require('./signup.scss')

module.exports = ['$log', SignupController]

function SignupController ($log) {
  $log.debug('Called SignupController')
  let self = this
  self.title = 'Welcome to the Signup Page'
}
