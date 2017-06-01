var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
   // Se pone la variable en el String del index, no olvidar asociar el mainCtrl en el index.html este debe ir en
  // Se agrega en: <html ng-app="universidadApp" ng-controller="mainCtrl">
  $scope.menuSuperior = 'parciales/menu.html';

  // IMPORTANTE, para traer el contenido en el container Home,profesores alumnos se debe importar una libreria esta es ngRoute,
  // Buscarla en la pagina de angula en las libreiras adicionales la dirección es:
  // https://code.angularjs.org/1.5.0/ se deben bajar las sgtes librerias:
     // angular-route.min.js
     // angular-route.min.js.map

  // Se debe agregar en module el 'ngRoute', funciones para realizar el movimiento entre páginas, ahora se configura la navegación. en un archivo
  // Externo este se llamara en config.js configuración o prgramación entre las páginas.

}]);
