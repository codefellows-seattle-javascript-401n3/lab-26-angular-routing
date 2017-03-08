require('./scss/main.scss');

let path = require('path');
let pascalcase = require('pascalcase');
let camelcase = require('camelcase');
let angular = require('angular');
let uiRouter = require('angular-ui-router');

let routesApp = angular.module('routesApp', [uiRouter]);

//section from lecture code
let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  routesApp.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  routesApp.controller(name, context(key));
});
