'use strict'

// we are exporting the routerConfig and it's dependencies which will
// then be attached to the module through webpack
module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig]

function routerConfig($stateProvider, $urlRouterProvider) {
  // when the root is called, route to home view in the ui-view in html file
  $urlRouterProvider.when('/', '/home')

  // define all the routes in an array of objects,
  // which are kinda like components, except they also include a url
  let routes = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'gallery',
      url: '/gallery',
      template: require('../view/gallery/gallery.html'),
      controller: 'GalleryController',
      controllerAs: 'galleryCtrl'
    },
    {
      name: 'signup',
      url: '/signup',
      template: require('../view/signup/signup.html'),
      controller: 'SignupController',
      controllerAs: 'signupCtrl'
    }
  ]

  // this keeps are code dryer -- we need to attach all the routes to the
  // state provider which will change the state/view based on the url
  routes.forEach( route => {
    $stateProvider.state(route)
  })
}
