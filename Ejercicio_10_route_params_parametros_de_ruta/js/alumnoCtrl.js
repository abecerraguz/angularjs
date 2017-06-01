app.controller('alumnoCtrl', ['$scope','$routeParams','$http', function ($scope,$routeParams,$http) {

	 $scope.setActive("mAlumnos");
	 
	 var codigo = $routeParams.codigo;

	 $scope.actualizado = false;

	 $scope.alumno = {};

	 $scope.creando = false;

	 if (codigo == "nuevo") {
	 	$scope.creando = true
	 }else{


		/*
		En este controlador debemos hacer el codigo
		Para esto debemos hacer una nueva inyección
		Debemos llamar el PHP externo para esto definimos $http
		*/
	 	$http.get('php/servicios/alumnos.getAlumno.php?c='+codigo).success(function(data){

		// Validacion para que cuando ingresen codigos no definidos en la URL este se redirecciona a alumnos
		if (data.err !== undefined) {

			window.location = "#/alumnos";
			return;
		}

		$scope.alumno = data

		});

	 }
	 


	/*
	IMPORTANTE
	Para crear una mascara o darle formato al fono:
	Bajar angular UI
	*/

	// CREAMOS LA FUNCION guardarAlumno()
	$scope.guardarAlumno = function(){

		// Necistamos saber si estamos guardando o Editando

		//alert("Hecho");
		if (true){

			$http.post('php/servicios/alumnos.crear.php',$scope.alumno).success(function(data){

			if(data.err === false){
				$scope.actualizado = true;

				setTimeout(function(){
					$scope.actualizado = false;
					$scope.$apply();
				},3500);


			};

		});

		}else{

		$http.post('php/servicios/alumnos.guardar.php',$scope.alumno).success(function(data){

			if(data.err === false){
				$scope.actualizado = true;

				setTimeout(function(){
					$scope.actualizado = false;
					$scope.$apply();
				},3500);


			};
		});

		}










		
	}

	
}]);
