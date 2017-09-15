/* register the modules the application depends upon here*/
angular.module('listings', []);

/* register the application and inject all the necessary dependencies */
var app = angular.module('directoryApp', ['ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps', 'listings']);

/* application configuration */
app.config(['$urlRouterProvider', '$locationProvider', 'uiGmapGoogleMapApiProvider',
  function($urlRouterProvider, $locationProvider, GoogleMapApiProviders) {
    /* https://docs.angularjs.org/api/ng/provider/$locationProvider */
    $locationProvider.html5Mode(true);

    /* go to the '/listings' URL if an invalid route is provided */
    $urlRouterProvider.otherwise('/listings');

    // configure map provider
      GoogleMapApiProviders.configure({key:"AIzaSyDP0OBmx7Iyr3-VaXNS68UWbP07M1FwXzQ"});
  }
]);

/* set the initial state of the application */
app.run(['$state', 
  function($state) {
    $state.go('listings.list');
  }
]);