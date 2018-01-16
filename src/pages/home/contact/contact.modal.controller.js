'use strict';

(function(){
	angular
		.module('Website')
		.controller('ContactModalController', ['$scope', '$http', Controller]);

	function Controller($scope, $http){
		$scope.areFieldsFilled = function(){
			return (
				!!$scope.name &&
				!!$scope.email &&
				!!$scope.message
			);
		};
		
		$scope.sendEmail = function(){
			console.log('Sending email');
			if(!$scope.areFieldsFilled()) return false;
			$scope.mailSent = true;
			/*
			$http
				.post('/php/contato.php', {name: $scope.name, email: $scope.email, message: $scope.message})
				.then(function(res){
					$scope.mailSent = true;
				});
			*/
		};
	}
})();