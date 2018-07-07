appBancoHoras.controller("loginController", function($scope, $http){
	
	$scope.usuario={};
	
	$scope.token = "";
	
	$scope.autenticar = function(){
		
		$http.post("http://localhost:8080/auth", $scope.usuario)
		//$http.post("https://api-banco-horas.herokuapp.com/auth", $scope.usuario)
		.then(function(response){
			console.log("Sucesso " + response.data);
			$scope.token = response.data.data.token;
			
			localStorage.setItem("userToken", response.data.data.token);
			
		}, function(response){
			console.log("Falha " + response.data.errors);
		});
		//console.log("Autenticou! " + $scope.usuario.email + " " + $scope.usuario.senha)
	}

});