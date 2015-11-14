angular.module('myapp',['ui.grid','ngDialog']).controller('PopupCtrl',['$scope','$http','ngDialog',function($scope,$http,ngDialog){
	$scope.newData = {
		columnDefs:[
		{name:'Name'},
		{name: 'Age'},
		{name: 'Mobile'}
		]
	};
	
	$http({ method: 'GET', url: 'js/data.json' }).success(function (data) {
			$scope.newData.data = data; 
	}).
	error(function (data) {
            console.log(data);
        });
	
}]);