// routeProvider me permite realizar la navegación entre las páginas
app.config(function($routeProvider){

  // El routeProvider es un estandar de navegación este indica lo sgte:

  // Cuando la URL termina en slach , este se direge al home
  $routeProvider
  .when('/',{
    templateUrl:'parciales/home.html',
    controller:'inicioCtrl'
  })

  .when('/profesores',{
    templateUrl:'parciales/profesores.html',
    controller:'profesoresCtrl'
  })

  .when('/alumnos',{
    templateUrl:'parciales/alumnos.html',
    controller:'alumnosCtrl'
  })

  // Caso contrario lo redirecionara
  .otherwise({
    redirecTo:'/'
  });

});
