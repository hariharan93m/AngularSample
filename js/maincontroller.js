angular.module('myapp.main', [])
	.controller('MainCtrl',
		['$scope',
		 'ngDialog',
		 'testService',
		 'Restangular',
			 function ( $scope,
						ngDialog,
						testService,
						Restangular){
				
			function callBack(success){ 
				$scope.myData.data = success; 
			}
		
			var init = function init(){ 					
				$scope.myData = { columnDefs:[ {name:'Name'}, {name: 'Age'}, {name: 'Mobile'} ] };
				testService.loadData(callBack);
			};
		
			$scope.popUpDialog = function() {
				ngDialog.open({
					template : 'PopupTemplate.html',
					controller: 'PopupController',
					scope : $scope,
					className : 'ngdialog ngdialog-theme-default',
					closeByDocument : true,
					preserveFocus : false,
				});
			};		
			init();
			}
		]
	);