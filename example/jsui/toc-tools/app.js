(function(){
    var app = angular.module("ngTocTools", ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

    app.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider.when('/cloud', {
                templateUrl: 'cloud.html',
                controller: 'CloudCtrl',
                controllerAs: 'cloud'
            })
            .when('/cloud01', {
                templateUrl: 'cloud01.html',
                controller: 'CloudCtrl',
                controllerAs: 'cloud'
            })
            .when('/help', {
                templateUrl: 'help.html',
                controller: 'HelpCtrl',
                controllerAs: 'help'
            });

            // configure html5 to get links working on jsfiddle
            // $locationProvider.html5Mode(true);
        }]);

    app.controller("MainCtrl", ["$scope", '$route', '$routeParams', '$location', function($scope, $route, $routeParams, $location){
        $scope.test = "xxx, yes!";
        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;
    }]);
    app.controller("CloudCtrl", ["$scope", '$routeParams', function($scope, $routeParams){
        this.name = "CloudCtrl";
        this.params = $routeParams;

        $scope.test = "cloud, yes!";
        $scope.step = 0;
        // $scope.cloudata = {"title":"","story":""};
        $scope.cloudata = {"title":"疑云标题","story":"故事概述","partyB":"我","actionB":"走","partyC":"我","actionC":"不走","requireB":"回家","requireC":"工作","goalA":"生活好"};
        $scope.next = function() {
            switch ($scope.step) {
                case 0:
                case 6:
                    break;
                default:;
            }
            $scope.step ++;
        };
        $scope.pre = function() {
            switch ($scope.step) {
                case 0:
                case 6:
                    break;
                default:;
            }
            $scope.step --;
        };
    }]);
    app.controller("HelpCtrl", ["$scope", '$routeParams', function($scope, $routeParams){
        $scope.test = "xxx, yes!";
        this.name = "HelpCtrl";
        this.params = $routeParams;
    }]);
})();
