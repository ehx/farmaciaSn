app.config(function($stateProvider, $urlRouterProvider){
      
  $urlRouterProvider.otherwise("/home");
  
  $stateProvider
    .state('home', {
        url: "/home",
        views: {
          '': {
            templateUrl: 'main.html',
            controller: 'FarmaciaController'
          }
        }
    })

    .state('map', {
        url: "/map/:nombreFarmacia",
        views: {
          '': {
            templateUrl: 'map.html',
            controller: 'mapaController'
          }
        }
    });
});