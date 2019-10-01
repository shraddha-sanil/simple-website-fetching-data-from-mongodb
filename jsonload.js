var myApp  =  angular.module('myApp', []);

myApp.controller('jsonCtrl', function($scope, $http){
	$http.get('employees.json').success(function (data){
		$scope.employees = data;
	});
    
    $scope.getTotalEmployees    =   function(){
        return $scope.employees.length;    
    }
        

});
