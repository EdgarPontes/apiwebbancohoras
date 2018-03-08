appBancoHoras.controller("lancamentoController", function($scope, $http){
	
	$scope.lancamentos = [];
	$scope.lancamento  = {};
	token              = localStorage.getItem("userToken");
	
	carregarLancamento = function(){
		$http({method : 'GET', url : 'http://localhost:8081/api/funcionarios/1'})
		.then(function(response){
			console.log(response.data.data);
			$scope.lancamentos = response.data;
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
});