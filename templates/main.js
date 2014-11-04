var app = angular.module('MainModule', [
   'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when("/", {templateUrl: "views/home.html", controller: "PageCtrl"})
	.when("/sales", {templateUrl: "views/sales.html", controller: "PageCtrl"})
	.when("/store", {templateUrl: "views/store.html", controller: "PageCtrl"})
	.otherwise("/404", {templateUrl: "views/404.html", controller: "PageCtrl"})
}]);

app.controller('PageCtrl', function(){
	console.log('PageCtrl');
});