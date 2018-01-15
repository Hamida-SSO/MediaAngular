angular.module('mediaModule').controller('ListMediaCtrl', function($scope, MediaService) {
	
	$scope.listMedia = [];
	MediaService.getAll().then(
		function(data){
			$scope.listMedia = data;
			console.log($scope.listMedia);
		},
		function() {
			console.log("Error ListMediaCtrl - getAll");
		}
	);
	$scope.goMedia = function(media) {
		MediaService.changeLocation(media);
	}
});