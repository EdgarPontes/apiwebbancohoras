//Modulo principal
var appBancoHoras = angular.module("appBancoHoras", ["ngRoute"]);

appBancoHoras.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when("/login", {
		templateUrl : 'views/login.html',
		controller : 'loginController'
	}).when("/empresa", {
		templateUrl : 'views/empresa.html',
		controller : 'pjController'
	}).otherwise({
		rediretTo : "/"
	});
	
	$locationProvider.hashPrefix('').html5Mode(true);
	
});