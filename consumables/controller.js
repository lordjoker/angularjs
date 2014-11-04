var app = angular.module('ConsumablesModule', ['ngTable']);
app.controller('CreateConsumablesOfferController', function($scope, $filter, ngTableParams) {
			var data = [
	                {title: "Kupie bandaze", description: "Kto mi sprzeda bandaze?", type: "Kupno", state: "Nowa", validityDate: "2014-09-30"},
	                {title: "Sprzedam nowe strzykawki", description: "Czy ktos zainteresowany?", type: "Sprzedaz", state: "Nowa", validityDate: "2014-09-29"},
	                {title: "Kupie bandaze", description: "Ktos ma na zbyciu?", type: "Kupno", state: "Zamknieta", validityDate: "2014-09-20"},
	                {title: "Sprzedam igly", description: "Ktos ma wolne miejsce w magazynie?", type: "Sprzedaz", state: "Zamknieta", validityDate: "2014-08-20"},
			];

		    $scope.message = "";

			$scope.data = data;
			
			$scope.tableParams = new ngTableParams({
		        page: 1,            // show first page
		        count: 10,          // count per page
		        filter: {
		            //name: 'M'       // initial filter
		        },
		        sorting: {
		            name: 'asc'     // initial sorting
		        }
		    }, {
		        total: data.length, 
		        getData: function ($defer, params) {
		            var filteredData = params.filter() ?
		                    $filter('filter')(data, params.filter()) :
		                    data;
		            var orderedData = params.sorting() ?
		                    $filter('orderBy')(filteredData, params.orderBy()) :
		                    data;

		            params.total(orderedData.length); 
		            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
		        }
		    });
			
			$scope.changeSelection = function(partner) {
		        console.info(partner);
		    };
		    
		    $scope.selectAll = function() {
		    	$scope.tableParams.data.forEach(function(row){
		    		row.$selected = true;
		    	});
		    };
		    
		}
);