app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){

	 $scope.setActive("mAlumnos");
	 // Se crea una variable con un arreglompara recuperar los datos de los alumnos
	 $scope.alumnos = {};

	 // Variable para controlar la cantidad de campos mostrados
	 $scope.posicion = 5;

	 // Se realiza la busqueda del archivo php
	 $http.get('php/servicios/alumnos.listado.php').success(function(data){

	 //Recuperamos los datos de la data
	 $scope.alumnos = data;

	});

	//funcion que muestra los siguinetes

	$scope.siguientes = function(){

		if( $scope.alumnos.length > $scope.posicion )
		{
			$scope.posicion += 5;
		};


	}

	$scope.anteriores = function(){

		if( $scope.posicion > 5 )
		{
			$scope.posicion -= 5;
		};


	}

}]);

