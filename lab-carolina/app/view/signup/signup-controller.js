'use strict';

require('./signup.scss');

module.exports = ['$log', SignupController];
function SignupController($log) {
  $log.debug('SignupController');
  this.title = 'This is signup page';

}
