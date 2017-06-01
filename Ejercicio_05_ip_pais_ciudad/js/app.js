(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  // Se crea una variable con un arreglo vacio
  $scope.geo = {};


  //http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK
	// jsonp() es para buscar información de recursos externos
  $http.jsonp('http://www.geoplugin.net/json.gp?jsoncallback=JSON_CALLBACK')
    .success(function(data){
    // La variable geo se iguala a data
    $scope.geo = data;

  });


}]);





})();
