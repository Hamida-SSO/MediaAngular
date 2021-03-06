angular.module('mediaModule').factory('MediaService', ['$http','$location', function($http,$location) {
	

	var promise1 = $http.get('http://192.168.1.15:8090/resource/media.recherche');
	
	var getAllBody = function() {
		var promise2 = promise1.then(function(response) {
			console.log(response);
			return response.data;
		});
		return promise2;
	};
	
	var mediaPromises = {};
	var getOneBody = function(id) {
		if(!mediaPromises[id]) {
			mediaPromises[id] = $http.get('http://192.168.1.15:8090/resource/media.accession',{params:{id:id}});
		}
		var promise2 = mediaPromises[id].then(function(response) {
			console.log(response.data);
			return response.data;
		});
		return promise2; 
	};
	
	var updateBody = function(media) {
		$http.post('http://192.168.1.15:8090/resource/media.modification', media).then(function(response) {
			goMediaBody(response.data);
		});
	}
	
	var createBody = function(media) {
		$http.post('http://192.168.1.15:8090/resource/media.creation', media).then(function(response) {
		});
	}
	
	var goMediaBody = function(media) {
		$location.path('/medias/'+ media.id);
	};
	
	var goMediaCreateBody = function() {
		$location.path('/media/create');
	};
	
	
	return {
		getAll : getAllBody,
		getOne : getOneBody,
		update : updateBody,
		create : createBody,
		goMedia : goMediaBody,
		goMediaCreate : goMediaCreateBody
	}
	
}]);