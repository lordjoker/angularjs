var app = angular.module('MainModule', [
   'ngRoute',
   'ngTable'
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when("/", {templateUrl: "views/home.html", controller: "MainCtrl"})
	.when("/sales", {templateUrl: "views/sales.html", controller: "SalesCtrl"})
	.when("/store", {templateUrl: "views/store.html", controller: "StoreCtrl"})
	.otherwise("/404", {templateUrl: "views/404.html", controller: "MainCtrl"})
}]);

app.controller('MainCtrl', function(){
	console.log('MainCtrl');
});

