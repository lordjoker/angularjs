var indexModule = angular.module('IndexModule', []);
indexModule.controller('IndexController', 
		function($scope) {
			$scope.items = [
			                {name: "Item1", price: 2.95, quantity: 5},
			                {name: "Item2", price: 12.95, quantity: 17},
			                {name: "Item3", price: 6.95, quantity: 8}
			                ];
			
			$scope.remove = function(index) {
				$scope.items.splice(index, 1);
			};
		}
);




var formModule = angular.module('FormModule', []);
formModule.controller('FormController',
		function($scope) {
			$scope.computeNeeded = function() {
				$scope.needed = $scope.startingEstimate * 10;
			};
			$scope.requestFunding = function() {
				window.alert("Sorry, please get more customers first");
			};
			$scope.reset = function() {
				$scope.startingEstimate = 0;
			};
		}
);




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