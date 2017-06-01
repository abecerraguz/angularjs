(function(){

var app = angular.module('ejemplosApp',[ ]);


// Este nuevo parametro '$http'se llama inyección, se utiliza para obtener datos externos
app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  // Se declara en el scope un arreglo de datos, este se declara como arreglo vacio
  $scope.profesores = {};
  // Se declara la varibla para crear un include
  $scope.tblProfesores = 'parciales/tblProfesores.html'



  // Recuperamos la información de forma dinámica
  $http.get('json/profesores.json').success(function(data){
      // Codigo cuando es correcta la petición, se le asigna el parametro data y este es igual a la información de json
      $scope.profesores = data.profesores;




  });






}]);





})();
