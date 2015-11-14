angular.module('myapp.main')
	.service('testService',
		[ 'Restangular', 
			function (Restangular){
	
				this.loadData = function loadData(callBack){
					Restangular.all('js/data.json').doGET().then(
					callBack
					,function(){
						console.log("error" +data);
					});
				
				};

			}
		]	
	);