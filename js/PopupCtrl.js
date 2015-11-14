angular.module('myapp',['ui.grid','ngDialog']).controller('PopupCtrl',['$scope','$http','ngDialog',function($scope,$http,ngDialog){
	$scope.newData = {
		columnDefs:[
		{name:'Name'},
		{name: 'Age'},
		{name: 'Mobile'}
		]
	};
}]);