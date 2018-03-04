appBancoHoras.controller("pjController", function($scope, $http){
	
	$scope.pjs = [];
	$scope.pj = {};
	token = localStorage.getItem("userToken");
	console.log(token);
		
	carregarPj = function(){
				
		$http({method:'GET', url: 'https://api-banco-horas.herokuapp.com/api/empresas',headers: {'Authorization': 'Bearer ' + 'token'  }})
		.then(function(response){
			$scope.pjs = response.data;
		
		}, function(response){
			console.log(response.data);
			console.log(response.status);
			
		});
	};
	
	$scope.salvarPj = function(){
		$http({method:'POST', url: 'https://api-banco-horas.herokuapp.com/api/cadastrar-pj',
			headers: {'Authorization': 'Bearer ' + 'token'  }, data:$scope.pj })
			.then(function(response){
			console.log(response);
			carregarPj();
			$scope.cancelarAlterarPj();
			
		}, function(response){
			console.log(response.data);
			console.log(response.status);
			
		});
	};
	$scope.excluirPj = function(pj){
		$http({method:'DELETE', url: '#' + pj.id })
		.then(function(response){
			
			pos = $scope.pjs.indexOf(pj);
			$scope.pjs.splice(pos, 1);
			
		}, function(response){
			console.log(response.data);
			console.log(response.status);
			
		});
	};
	
	$scope.alterarPj = function(pj){
		$scope.pj = angular.copy(pj);

	};
	
	$scope.cancelarAlterarPj = function(){
		$scope.pj = {};
		
	};
	
	carregarPj();
});