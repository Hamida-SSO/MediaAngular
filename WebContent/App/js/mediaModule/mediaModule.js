angular.module('mediaModule',['ngRoute']).config(function($routeProvider) {
	
	$routeProvider.when('/medias', {
		templateUrl:'./partial/mediaModule/listMedia.html',
		controller: 'ListMediaCtrl'
	})
	.when('/media/create', {
		templateUrl:'./partial/mediaModule/createMedia.html',
		controller: 'CreateMediaCtrl'
	})
	.when('/medias/:id', {
		templateUrl:'./partial/mediaModule/infoMedia.html',
		controller: 'InfoMediaCtrl'
	})
	.otherwise({
		redirectTo : '/medias'
	})
});