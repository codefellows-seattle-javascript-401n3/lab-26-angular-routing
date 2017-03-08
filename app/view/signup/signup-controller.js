'use strict';

require('./signup.scss');

module.exports = ['$log', SignupController];

function SignupController($log) {
  $log.debug('SignupController');
  this.title = 'I am the SignupController, this is my title.'
};
