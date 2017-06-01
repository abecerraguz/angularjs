// Directivas y modulo de control de nuestra aplicacion
// El nombre del modulo de control debe ser el mismo en el archivo <html ng-app="universidadApp">
var app = angular.module('universidadApp',[]);


// Creamos los controladores, estos son los encargados de controlar
// la página o parte de un modulo de esta. Estos deben estar correctamente encapsulada.
// Nuestro controlador 'profesorCtrl' es encargado de manejar los datos del profesor.
// Los controladores contienen gran cantidad de codigo tanto como variables, funciones etc.

app.controller('profesorCtrl',function($scope){

  $scope.profesor = profesorData;
  // Creamos una nueva variable que se llama editando esta será inicializada en un arragle vacio {}
  // Creamos en el HTML un boton llamado editar y este al hacer click va atomar los datos del profesorData y los pasará a los input vacios
  $scope.editando = {}

  // Definimos una variable para ocultar la caja
  $scope.mostrarCaja = false

  // Creamos la funcion editarProfesor
  $scope.EditarProfesor = function(){
    // Queremos hacer una copia del profesorData
    angular.copy($scope.profesor, $scope.editando)
    $scope.mostrarCaja = true
  }

  //Creamos nuestra funcion para guardar cambios
  $scope.GuardarCambios = function(){
    angular.copy($scope.editando ,$scope.profesor)
    $scope.mostrarCaja = false
  }

  //Cancelar cambios
  $scope.CancelarCambios = function(){
    $scope.editando = {}
    $scope.mostrarCaja = false
  }

});

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}

/*
IMPORTANTE
Se realizan cambios para hacer que la aplicación web sea editable.
Para esto en la funcion del controller agregamos el concepto scope, este es una variable global.
Se elimina el this.profesor por un $scope.profesor
Cuando hacemos referncia a una variable global como scope en el HTML debemos sacar la referencia profe.profesor.nombre ahora quedaría profesor.nombre
*/
