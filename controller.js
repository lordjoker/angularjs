var mainModule = angular.module('MainModule', []);

mainModule.controller('CartController', 
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