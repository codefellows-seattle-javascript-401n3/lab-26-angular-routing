'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/', '/home');  //urlRouterProvider sets up definitive routes.

//all these routes will have the # and will act like the # anchor.  so they will look like #/home and #/signup.

  let routes = [
    {
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    },
    {
      name: 'signup',
      url: '/signup',
      template: require('../view/signup/signup.html'),
      controller: 'SignupController',
      controllerAs: 'signupCtrl'
    },
    {
      name: 'gallery',
      url: '/gallery',
      template: require('../view/gallery/gallery.html'),
      controller: 'GalleryController',
      controllerAs: 'galleryCtrl'
    }
  ];

//iterates over all the routes and registers them with the service.
  routes.forEach( route => {
    $stateProvider.state(route);
  });
};
