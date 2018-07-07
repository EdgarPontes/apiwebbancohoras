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
	}).when("/empresaConsulta", {
		templateUrl : 'views/empresaConsulta.html',
		controller : 'pjController'
	}).when("/funcionario", {
		templateUrl : 'views/funcionario.html',
		controller : 'pfController'
	}).when("/funcionarioConsulta", {
		templateUrl : 'views/funcionarioConsulta.html',
		controller : 'pfController'
	}).when("/lancamento", {
		templateUrl : 'views/lancamento.html',
		controller : 'lancamentoController'
	}).when("/lancamentoConsulta", {
		templateUrl : 'views/lancamentoConsulta.html',
		controller : 'lancamentoController'
	}).otherwise({
		rediretTo : "/"
	});
	
	$locationProvider.hashPrefix('').html5Mode(true);
	
});