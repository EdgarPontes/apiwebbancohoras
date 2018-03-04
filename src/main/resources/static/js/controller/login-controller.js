appBancoHoras.controller("loginController", function($scope, $http){
	
	$scope.usuario={};
	
	$scope.token = "";
	
	$scope.autenticar = function(){
		
		$http.post("https://api-banco-horas.herokuapp.com/auth", $scope.usuario)
		.then(function(response){
			console.log("Sucesso " + response);
			$scope.token = response.data.data.token;
			
			localStorage.setItem("userToken", response.data.data.token);
			
		}, function(response){
			console.log("Falha " + response);
		});
		//console.log("Autenticou! " + $scope.usuario.email + " " + $scope.usuario.senha)
	}

});