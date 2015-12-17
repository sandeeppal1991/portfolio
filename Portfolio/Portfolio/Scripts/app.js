var app = angular.module("portfolio", []);

app.controller("portController", function ($scope,$http) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $http.get('/Scripts/data.json').success(function (data) {
        $scope.works = data;
    });
});