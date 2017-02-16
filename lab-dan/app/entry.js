'use strict'

require('./scss/main.scss')

const angular = require('angular')
const uiRouter = require('angular-ui-router')
const path = require('path')
const camelcase = require('camelcase')
const pascalcase = require('pascalcase')

// oh hey, here's a module dependency
angular.module('routingExampleModule', [uiRouter])

// use webpack to load router config files and attach to angular module
let context = require.context('./config/', true, /\.js$/)
context.keys().forEach(key => {
  angular.module('routingExampleModule').config(context(key))
})

// use webpack to load view files and attach as controllers on angular module
context = require.context('./view/', true, /\.js$/)
context.keys().forEach( key => {
  let name = pascalcase(path.basename(key, '.js'))
  angular.module('routingExampleModule').controller(name, context(key))
})
