var app=angular.module("myapp",['ngRoute','ngMessages']);

app.config(function($routeProvider,$locationProvider){
    $routeProvider.when('/',{
        templateUrl:'views/home.html',
        controller:'homeController'
    });
  
    $routeProvider.when('/404',{
        templateUrl:'views/404.html'
    });
    $routeProvider.otherwise({
        redirectTo:'/404'
    });
    $locationProvider.html5Mode(true);
})

app.controller('homeController', function ($scope, $http, $routeParams) {
    console.log(" in homeController load");
    
    $scope.submitForm = function () {
        console.log(" in submitForm function");
        console.log($scope.body);
       
        var keyword = $scope.body.keyword;
        var field = $scope.body.field;
        $http({
            url: '/' + keyword + "/" + field,
        }).then(function (response) {
            console.log(response);
        }, function (response) {
            console.log("error");
            console.log(response);
        });

        // $http({
        //     url:'/'+$scope.body.keyword+"/"+$scope.body.keyword,
        //     // method:'POST',
        //     // data:$scope.body
        // }).then(function(res){
        //     $scope.body={};
        //     console.log("success ");
        //     console.log(res);
        //     // alert("Sign up Succesful !")
        //     //  $location.path('/login');
        //       },function(res){
        //     console.log("error");
        //     console.log(res);
        // })
    }


})//homeController end





