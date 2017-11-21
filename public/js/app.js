var app=angular.module("myapp",['ngRoute']);

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
        // console.log($scope.body);
        var keyword = $scope.body.keyword;
        var field = $scope.body.field;
        $http({
            url: '/api/' + keyword + "/" + field,
        }).then(function (response) {
            // console.log(response);

            $scope.booklist=response.data;
            if($scope.booklist.length){
                $scope.display=true;
            }
            else{
                $scope.display=false;
            }

            // console.log($scope.booklist);
        }, function (response) {
            console.log("error");
            console.log(response);
        });

       
    }


})//homeController end





