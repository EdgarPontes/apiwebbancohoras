appBancoHoras.controller("mainController", function($scope, $location, $route, $routeParams){
	$scope.$location = $location;
	$scope.$route = $route;
	$scope.$routeParams = $routeParams;
	
	$scope.abrirMenu = function() {
		document.getElementById("menu").classList.add("menu_aberto");
	};
	
	$scope.fecharMenu = function(){
		document.getElementById("menu").classList.remove("menu_aberto");
	};
});