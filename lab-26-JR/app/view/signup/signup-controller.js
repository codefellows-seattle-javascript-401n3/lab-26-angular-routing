'use strict';

module.exports = ['$log', SignupController];

function SignupController($log) {
  $log.debug('SignupController stuff');
  this.title = 'signup data-bound';
}
