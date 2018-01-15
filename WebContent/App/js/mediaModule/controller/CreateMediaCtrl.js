angular.module('mediaModule').controller('CreateMediaCtrl', function($scope, MediaService) {
	$scope.create = function(media) {
		MediaService.create(media);
	};
});