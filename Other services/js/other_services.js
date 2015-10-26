var app = angular.module('demoapp',[]);
app.controller('interpolateController', ['$scope','$timeout',function ($scope,$timeout){
	$scope.name = "Bala";
	$timeout(function() {
		$scope.name = "Everybody";
	}, 3000);
}]);

app.controller('directiveController',['$scope','$filter',function($scope,$filter){
	$scope.handle ='';
	$scope.lowercasehandle = function(){
		return $filter('lowercase')($scope.handle);
	}

}]);