'use strict';

require('./scss/main.scss');
require('./view/gallery/gallery.scss');
require('./view/home/home.scss');
require('./view/signup/signup.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
const uiRouter = require('angular-ui-router');

const routesApp = angular.module('routesApp', [uiRouter]);

//this is loading up the route file.
let context = require.context('./config/', true, /\.js$/);
context.keys().forEach(key => {
  routesApp.config(context(key));
});

context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'));
  routesApp.controller(name, context(key));  //this is registering a controller with the routesApp.  it\s just doing it with a forEach loop.  but it's doing this with appController and HomeController.
});
