(function(){
  var app = angular.module('ngRouteExample', ['ngRoute']);
  app.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
  });

  app.controller('BookController', function($scope, $routeParams) {
    $scope.name = "BookController";
    $scope.params = $routeParams;
  });

  app.controller('ChapterController', function($scope, $routeParams) {
    $scope.name = "ChapterController";
    $scope.params = $routeParams;
  });

  app.controller('BackboneCtrl', function($scope, $routeParams) {
    $scope.name = "BackboneCtrl";
    $scope.params = $routeParams;
    alert("help");
  });

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/Book/:bookId', {
      templateUrl: 'book.html',
      controller: 'BookController'
    })
  .when('/Book/:bookId/ch/:chapterId', {
    templateUrl: 'chapter.html',
    controller: 'ChapterController'
  })
  .otherwise({
    templateUrl: 'book.html',
    controller: 'BackboneCtrl'
    //controller: 'RouteCtrl'
  })
;
  // configure html5 to get links working on jsfiddle
  // $locationProvider.html5Mode(true);
  }]);
})();
