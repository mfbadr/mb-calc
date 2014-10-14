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
        $scope.display = num.toString();
      }else{
        $scope.display += num;
      }

    };
  }]);
})();
