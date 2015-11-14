angular.module('myapp.popup', [])
	.controller('PopupController',
		['$scope',
		 '$http',
		 'ngDialog',
			   function($scope,
					$http,
					ngDialog){
						$scope.saveData = function() {
								$scope.saveDetails = {};
								$scope.saveDetails = angular.copy($scope.details);		
								$scope.myData.data.push($scope.saveDetails);
								console.log($scope.saveDetails);
								ngDialog.close();
		};		
}]);