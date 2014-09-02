var filterModule = angular.module('FilterModule', []);
filterModule.controller('FilterController',
		function($scope) {
			$scope.items = [
			                {name: "Name 1"},
			                {name: "Name 11"},
			                {name: "Name 22"}
			                ];
		}
);
filterModule.filter('boldStyle', function($sce) {
		var boldStyleFilter = function(input) {
			var words = input.split(' ');
			return $sce.trustAsHtml("<b>" + words[0] + "</b> " + words[1]);
		}
		return boldStyleFilter;
});