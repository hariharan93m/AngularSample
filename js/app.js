var myapp = angular.module('myapp', [ 'myapp.main',
						  'myapp.popup',
						  'ui.grid',
						  'ngDialog',
						  'ui.router',
						  'restangular']);

myapp.config(function ($stateProvider,
				$urlRouterProvider) {
					
					$urlRouterProvider.otherwise('/');
					
					$stateProvider
					.state('home',{
						url: '/',
						templateUrl: 'grid.html'
					})
					
					.state('about',{
						url: '/about',
						templateUrl: 'about.html'
					})
					
					.state('about.subContent1',{
						url: '/subContent1',
						templateUrl: 'subContent1.html'
					})
					
					.state('about.subContent2',{
						url: '/subContent2',
						templateUrl: 'subContent2.html'
					})
});