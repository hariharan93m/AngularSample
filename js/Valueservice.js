function getService(){
$http({ method: 'GET', url: 'js/data.json' }).success(function (data) {
			$scope.myData.data = data; 
	}).
	error(function (data) {
            console.log(data);
        });
	
}