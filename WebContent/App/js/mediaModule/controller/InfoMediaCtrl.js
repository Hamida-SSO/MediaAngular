angular.module('mediaModule').controller('InfoMediaCtrl', function($routeParams, $scope, MediaService) {
	$scope.modify = false;
	$scope.toggleModify = function() {
		$scope.modify = !$scope.modify;
	};
	
	$scope.update = function(media) {
		MediaService.update(media);
		$scope.toggleModify();
	};

	MediaService.getOne($routeParams.id).then( 
		function(data)
		{
			$scope.media = data;
		},
		function() {
			console.log('Error InfoMediaCtrl - getOne')
		}		
	);
});