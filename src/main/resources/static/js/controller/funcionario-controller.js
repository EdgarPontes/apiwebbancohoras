appBancoHoras.controller("pfController", function($scope, $http){
	
	$scope.pfs = [];
	$scope.pf  = {};
	token      = localStorage.getItem("userToken");
	console.log(token);
	
	carregarPf = function(){
		$http({method :'GET',  url : 'http://localhost:8080/api/funcionarios'})
		//$http({method :'GET',  url : 'https://api-banco-horas.herokuapp.com/api/funcionarios'})
		.then(function(response){
			console.log(response.data.data.content);
			$scope.pfs = response.data.data.content;
		},function(response){
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.salvarPf = function(){
		$http({method:'POST', url: 'http://localhost:8080/api/cadastrar-pf', data:$scope.pf })
		//$http({method:'POST', url: 'https://api-banco-horas.herokuapp.com/api/cadastrar-pf', data:$scope.pf })
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
		
		$http({method : 'GET', url : 'http://localhost:8080/api/funcionarios/' + $scope.cpfbuscar })
		//$http({method : 'GET', url : 'https://api-banco-horas.herokuapp.com/api/funcionarios' + $scope.cpfbuscar })
		.then(function(response){
			$scope.pf = response.data.data;
			console.log(response.data.data);
		}, function(response){
			console.log(response.data);
			console.log(response.status);
		});
		
	};
	
	$scope.excluirPf = function(){
		$http({method : 'DELETE', url : 'http://localhost:8080/api/funcionarios' + fis.id})
		.then(function(response){
			pos = $scope.pjs.indexOf(fis.id);
			$scope.pfs.splice(pos, 1);
		},function(response){
			console.log(response.data);
			console.log(response.status);
		});
	};
	
	$scope.alterarPf = function(fis){
		$scope.pf = angular.copy(fis);
	};
	
	$scope.cancelarAlterarPf = function(){
		$scope.pf = {};
	};
	
	carregarPf();
});