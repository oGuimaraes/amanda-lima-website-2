'use strict';

(function(){
	angular
		.module('Website')
		.controller('SocialController', ['$scope', '$http', Controller]);

	function Controller($scope, $http){
		$scope.sendText = 'ENVIAR';
		$scope.name = '';
		$scope.email = '';
		$scope.message = '';
		$scope.mailSuccess = false;

		$scope.sendEmail = function(){
			var data = {
				name: $scope.name,
				email: $scope.email,
				message: $scope.message,
			}

			$http
				.post('./php/contact.php', data)
				.then(function(){
					$scope.sendText = 'ENVIADO';
					$scope.mailSuccess = true;
				}, function(){
					// temporally
					$scope.mailSuccess = true;
				});
		}
	}
})();