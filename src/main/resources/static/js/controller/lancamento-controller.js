appBancoHoras.controller("lancamentoController", function($scope, $http){
	
	$scope.lancamentos = [];
	$scope.lancamento  = {};
	token              = localStorage.getItem("userToken");
	console.log(token);
	
	$scope.carregarLancamentos = function(){
		$http({method : 'GET', url : 'http://localhost:8080/api/lancamentos/lancamento/' + $scope.lancamentosbuscar})
		//$http({method : 'GET', url : 'https://api-banco-horas.herokuapp.com/api/lancamentos/funcionario' })
		.then(function(response){
			
			console.log(response.data.data.content);
			$scope.lancamentos = response.data.data.content;
			
		},function(response){
			
			console.log(response.data);
			console.log(response.status);
			
		});
	};

	$scope.carregarLancamento = function(){
		$http({method : 'GET', url : 'http://localhost:8080/api/lancamentos/' + $scope.lancamentobuscar})
		//$http({method : 'GET', url : 'https://api-banco-horas.herokuapp.com/api/lancamentos/funcionario/' + $scope.lancamentobuscar})
		.then(function(response){
			
			console.log(response.data.data);
			$scope.lancamento = response.data.data;
			console.log($scope.lancamentos.data)
			
		},function(response){
			
			console.log(response.data);
			console.log(response.status);
			
		});
	};
	
	$scope.salvarLancamento = function(){
		console.log($scope.lancamento);
		$http({method : 'POST', url : 'http://localhost:8080/api/lancamentos', data:$scope.lancamento})
		//$http({method : 'POST', url : 'https://api-banco-horas.herokuapp.com/api/lancamentos', data:$scope.lancamento})
		.then(function(response){
			
			console.log(response.data.data);
			console.log(response);
			
		},function(response){
			
			console.log(response.data);
			console.log(response.status);
		});
	};

	$scope.alterarLancamento = function(lanc){
		$scope.lancamento = angular.copy(lanc);
	};

	$scope.cancelarAlterarLancamento = function(){
		$scope.lancamento = {};
	};
		
});