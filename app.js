var app = angular.module('giphyApp', []);

app.controller('BodyController', function($scope, $http){

  $scope.randomGif = {};

  $scope.grabGif = function(){
    $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cat').then(function(response){
      $scope.buttonClicked = true;
      $scope.randomGif = response.data.data;
      console.log($scope.randomGif);
    })
  }
})
