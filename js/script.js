app = angular.module('myApp', ['ui.router', 'myApp.services']);

app.controller("FarmaciaController", function($scope, FarmaciasSrv) {
    
    $scope.farmacias = FarmaciasSrv.list();
    
	$scope.x={ modo: 'DRIVING' };
	
	$scope.modoauto = function() 
	{
		$scope.x.modo = "DRIVING";
	};
	
	$scope.modocaminar = function() 
	{
		$scope.x.modo = "WALKING";
	};

	
});

app.directive('ngDistancia', function($q , $timeout) {
    var directionsService = new google.maps.DirectionsService();
	var coords;

	var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
	function getCurrentPosition(){
		var d = $q.defer();
		if (navigator.geolocation) {
		    if(coords === undefined) {
                navigator.geolocation.getCurrentPosition(function(pos) {
                    d.resolve(pos.coords);
                }, function error(err) {
                    console.warn('ERROR(' + err.code + '): ' + err.message);
                    d.resolve(err);
                }, options);
            }
	  	}
	  	return d.promise;
	}

	
	function distancia(direccion , modo, posicionActual) {
		var request;
		var d = $q.defer();
		
		getCurrentPosition().then(function(posicionActual) {
			var origen = posicionActual.latitude + ',' + posicionActual.longitude; 
			var destino = direccion + ', San Nicolás de Los Arroyos, Buenos Aires, Argentina';
			var service = new google.maps.DistanceMatrixService();
			var request = {
				origins: [origen],
				destinations: [destino],
				travelMode: google.maps.TravelMode[modo],
				unitSystem: google.maps.UnitSystem.METRIC,
				avoidHighways: false,
				avoidTolls: false
			};
			var origen2 = new google.maps.LatLng(posicionActual.latitude + ',' + posicionActual.longitude); 
			var destino2 = direccion + ', San Nicolás de Los Arroyos, Buenos Aires, Argentina';
            var request2 = {
				origin: origen,
				destination: destino,
				travelMode: google.maps.TravelMode[modo],
				unitSystem: google.maps.UnitSystem.METRIC
			};
			
			//obtengo distancias
			service.getDistanceMatrix (request, callback);
			
			function callback(response, status) {
			if (status != google.maps.DistanceMatrixStatus.OK) {
				alert('Error : ' + status);
				d.reject();
			} else {
				var results = response.rows[0].elements;
				var datos = {};
			    datos.distancia = results[0].distance.text;
			    datos.duracion = results[0].duration.text;
			    
                //dibujo recorrido
                directionsService.route(request2, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                      directionsDisplay.setDirections(response);
                    }
                });
			    
			    d.resolve(datos);
			  }
			}
			
        			
            });
        
		return d.promise;
	}
	
	return {
		scope: {
			direccion: '=',
			modo: '='
        },
		restrict: 'A',
		template: 'distancia : {{ distancia }} , duracion : {{ duracion }}',
		link: function(scope) {
				google.maps.event.addDomListener(window, 'load', function(){
				    
                directionsDisplay = new google.maps.DirectionsRenderer();
                var sn = new google.maps.LatLng(-33.3388215,-60.2195587);
                var mapOptions = {
                    zoom:12,
                    center: sn
                };
                map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
                directionsDisplay.setMap(map);
                

				// Calcula distancia de posicionActual hacia la direccion del elemento farmacia
				distancia(scope.direccion, scope.modo).then(function(datos){
					scope.distancia = datos.distancia;	
					scope.duracion = datos.duracion;
				});
			});
			
			// Calcula distancia cuando cambia el modo de transporte
			scope.$watch("modo",function(value) {
				distancia(scope.direccion, value).then(function(datos){
					scope.distancia = datos.distancia;	
					scope.duracion = datos.duracion;
				});
			});
		}
	};
});