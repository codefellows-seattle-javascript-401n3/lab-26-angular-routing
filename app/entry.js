'use strict';

require('./scss/main.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
const uiRouter = require('angular-ui-router');
//the below [uiRouter] is what creates the ui-view tag in the HTML page.
const routesApp = angular.module('routesApp', [uiRouter]);
//the below is loading our route file
let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  routesApp.config(context(key));
});
//the code below is magic. It is dynamically naming all of the routes.
context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  routesApp.controller(name, context(key));
});
