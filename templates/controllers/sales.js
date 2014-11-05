app.controller('SalesCtrl', function($scope, $filter, ngTableParams){
	
	var data = {
		saleFiles:	[
	        {id: 1, name: "File 1", importDate: "2014-01-01"},
	        {id: 2, name: "File 2", importDate: "2014-01-02"},
	        {id: 3, name: "File 3", importDate: "2014-01-03"},
	        {id: 4, name: "File 4", importDate: "2014-01-03"},
	        {id: 5, name: "File 5", importDate: "2014-01-03"},
	        {id: 6, name: "File 6", importDate: "2014-01-03"},
	        {id: 7, name: "File 7", importDate: "2014-01-03"},
	        {id: 8, name: "File 8", importDate: "2014-01-03"},
	        {id: 9, name: "File 9", importDate: "2014-01-03"},
	        {id: 10, name: "File 10", importDate: "2014-01-03"},
	        {id: 11, name: "File 11", importDate: "2014-01-03"},
	        {id: 12, name: "File 12", importDate: "2014-01-03"},
	        {id: 13, name: "File 13", importDate: "2014-01-03"},
	        {id: 14, name: "File 14", importDate: "2014-01-03"}
	    ]
	};
	
    $scope.filesTableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            importDate: 'asc'     // initial sorting
        }
    }, {
        total: data.saleFiles.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')(data.saleFiles, params.orderBy()) :
                                data.saleFiles;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
	
});