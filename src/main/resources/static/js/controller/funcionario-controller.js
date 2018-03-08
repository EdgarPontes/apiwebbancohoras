appBancoHoras.controller("pfController", function($scope, $http){
	
	$scope.pfs = [];
	$scope.pf  = {};
	token      = localStorage.getItem("userToken");
	
	carregarPf = function(){
		$http({method :'GET',  url : 'http://localhost:8081/api/funcionarios'})
		.then(function(response){
			console.log(response.data.data);
			$scope.pfs = response.data;
		},function(response){
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.salvarPf = function(){
		$http({method:'POST', url: 'http://localhost:8081/api/cadastrar-pf', data:$scope.pf })
		.then(function(response){
		console.log(response);
		carregarPj();
		$scope.cancelarAlterarPj();
		
		}, function(response){
			console.log(response.data);
			console.log(response.status);
			
		});
	};
	
	$scope.buscarPfCpf = function(){
		
		$http({method : 'GET', url : 'http://localhost:8081/api/funcionarios' + $scope.cpfBuscar })
		.then(function(response){
			$scope.pf = response.data.data;
		}, function(response){
			console.log(response.data);
			console.log(response.status);
		});
		
	};
	
	$scope.excluirPf = function(){
		$http({method : 'DELETE', url : '#' + pf.id})
		.then(function(response){
			pos = $scope.pjs.indexOf(pj.id);
			$scope.pjs.splice(pos, 1);
		},function(response){
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.alterarPf = function(pj){
		$scope.pj = angular.copy(pj);
	};
	
	$scope.cancelarAlterarPf = function(){
		$scope.pf = {};
	};
	
	carregarPf();
});