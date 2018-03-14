appBancoHoras.controller("lancamentoController", function($scope, $http){
	
	$scope.lancamentos = [];
	$scope.lancamento  = {};
	token              = localStorage.getItem("userToken");
	console.log(token);
	
	$scope.carregarLancamento = function(){
		$http({method : 'GET', url : 'http://localhost:8081/api/lancamentos/funcionario/' + $scope.lancamentobuscar})
		.then(function(response){
			
			console.log(response.data.data.content);
			$scope.lancamentos = response.data.data.content;
			
		},function(response){
			
			console.log(response.data);
			console.log(response.status);
			
		});
	};
	
	$scope.salvarLancamento = function(){
		$http({method : 'POST', url : 'http://localhost:8081/api/lancamentos', data:$scope.lancamento})
		.then(function(response){
			
			console.log(response);
			
		},function(response){
			
			console.log(response.data);
			console.log(response.status);
		});
	};

	$scope.cancelarAlterarLancamento = function(){
		$scope.lancamentos = [];
	}
});