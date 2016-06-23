var app = angular.module('app', []);

app.controller('fichaController',['$scope','$window' , function ($scope,$window){
    $scope.setBeneficiario = function(){
        console.log("Sera?");
	   $window.localstorage.setItem('iceberg_'+$scope.beneficiario.identificacion,$scope.beneficiario);
    };
}]);
