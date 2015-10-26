var app = angular.module('demoapp',[]);
app.controller('interpolateController', ['$scope','$timeout',function ($scope,$timeout){
	$scope.name = "Bala";
	$timeout(function() {
		$scope.name = "Everybody";
	}, 3000);
}]);