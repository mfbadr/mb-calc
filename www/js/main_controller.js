(function(){
  'use strict';

  angular.module('mb-calc')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.title = 'mb-calc';
    $scope.display = '0';

    $scope.clear = function(){
      $scope.display = '0';

    };
    $scope.number = function(num){
      if($scope.display === '0' && num !== '.'){
        //just make a different decimal function
        //should check if there is already a decimal in display
        $scope.display = num.toString();
      }else{
        $scope.display += num;
      }

    };
  }]);
})();
