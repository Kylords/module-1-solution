// Minification

(function ()
{
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope', '$filter'];
  function LunchCheckController($scope, $filter)
  {
    $scope.message = "";
    $scope.list = "";
    $scope.consider = "We do not consider empty item such as (, ,)";

    var re = /\s*(?:,|$)\s*/;
    var foodlist = $scope.list.split(re);
    var food = [];
    console.log(food)
    
    $scope.check = function () {
      var listahan = $scope.list;
      var food = listahan.split(re);
      console.log(food)
    if (food.length > 3){
      $scope.message = "Too much";
    }
    else if (food.length <= 3 && food.length >= 1){
      $scope.message = "Enjoy";
    }
    else if (food.length == 0){
      $scope.message = "Input first";
    }
    };


  }
})();
