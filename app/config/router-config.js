'use strict';

module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/', '/home');
//line 6 is an anchor, it will take you to that spot, with a # in the URL that shows it
  var routes = [
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
      controllerAs: 'GalleryCtrl'
    }
  ];

  routes.forEach( route => {
    $stateProvider.state(route);
  });
};
