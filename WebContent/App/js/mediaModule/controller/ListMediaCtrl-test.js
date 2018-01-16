'use strict';

describe('ListMediaCtrl', function() {
	var ctrl, scope;
	
	beforeEach(function() {
		module('mediaModule');
		inject(function($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller('ListMediaCtrl', {
				'$scope' : scope
			});
		});
	});
	
	it('should have property published by controller', function() {
		expect(scope.one).toEqual(1);
	});
});