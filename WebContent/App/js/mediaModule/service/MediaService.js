angular.module('mediaModule').factory('MediaService', ['$http',function($http) {
	

	var promise1 = $http.get('http://192.168.1.16:8090/resource/media.recherche');
	
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
			mediaPromises[id] = $http.get('http://192.168.1.16:8090/resource/media.accession',{params:{id:id}});
		}
		var promise2 = mediaPromises[id].then(function(response) {
			console.log(response.data);
			return response.data;
		});
		return promise2; 
	};
	
	var updateBody = function(media) {
		var data = $http.post('http://192.168.1.16:8090/resource/media.modification', media);
		console.log(data);
	};
	
	return {
		getAll : getAllBody,
		getOne : getOneBody,
		update : updateBody
	}
	
}]);