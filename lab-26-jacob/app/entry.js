require('./scss/main.scss');

const path = require('path');
const camelcase = require('camelcase');
const pascalcase = require('pascalcase');
const angular = require('angular');
const uiRouter = require('angular-ui-router');

//module dependency. angular ui router is a npm module as well as a proper angular module.
//this gives the angular routesApp all the uiRouter functionality that it otherwise wouldn't have
const routesApp = angular.module('routesApp', [uiRouter]);


//this registers our routes with routesApp
var context = require.context('./config/', true, /\.js$/); //making routing functionality happen in the /config folder
//webpack context provider will register each controller.
context.keys().forEach(key => {
  routesApp.config(context(key));
});

//pointing require.context to the view directory.
context = require.context('./view/', true, /\.js$/);
context.keys().forEach( key => {
  var name = pascalcase(path.basename(key, '.js'));
  routesApp.controller(name, context(key));
  //registers a controller for routesApp. this is some magic that loads all the controllers for us
});
