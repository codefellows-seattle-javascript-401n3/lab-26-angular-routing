module.exports = ['$stateProvider', '$urlRouterProvider', routerConfig];

function routerConfig($stateProvider, $urlRouterProvider) {
  //built in services provided by UI router.
  $urlRouterProvider.when('/', '/home');
  //all this stuff does hash based routing.

  let routes = [
    {//three views defined - home view and signup view, and
      name: 'home',
      url: '/home',
      template: require('../view/home/home.html'),  //html template
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

//register each route with the $stateProvider library.
  routes.forEach( route => {
    $stateProvider.state(route);
  });
}
