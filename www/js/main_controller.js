(function(){
  'use strict';

  angular.module('mb-calc')
  .controller('MainCtrl', ['$scope', function($scope){
    $scope.title = 'mb-calc';
    $scope.temp = 0;
    $scope.display = '0';

    $scope.clear = function(){
      $scope.display = '0';

    };

    $scope.decimal = function(){
      if($scope.display.indexOf('.') === -1){
        $scope.display += '.';
      }
    };

    $scope.number = function(num){
      if($scope.display === '0'){
        $scope.display = num.toString();
      }else{
        $scope.display += num;
      }
    };

    $scope.operator = function(op){
      $scope.temp = parseFloat($scope.display);


      switch (op){
        case '+':
          $scope.currentOp = '+';
          $scope.tempDisplay = $scope.display + '+';
          $scope.display = '0';
          break;
        case '-':
          $scope.currentOp = '-';
          $scope.tempDisplay = $scope.display + '-';
          $scope.display = '0';
          break;
        case '/':
          $scope.currentOp = '/';
          $scope.tempDisplay = $scope.display + '/';
          $scope.display = '0';
          break;
        case '*':
          $scope.currentOp = '*';
          $scope.tempDisplay = $scope.display + '*';
          $scope.display = '0';
          break;
      }

      $scope.calculate = function(){
        switch($scope.currentOp){
          case '+':
            $scope.result = $scope.temp + parseFloat($scope.display);
            $scope.display = $scope.result.toString();
            break;
          case '-':
            $scope.result = $scope.temp - parseFloat($scope.display);
            $scope.display = $scope.result.toString();
            break;
          case '*':
            $scope.result = $scope.temp * parseFloat($scope.display);
            $scope.display = $scope.result.toString();
            break;
          case '/':
            $scope.result = $scope.temp / parseFloat($scope.display);
            $scope.display = $scope.result.toString();
            break;
        }
        $scope.currentOp = null;
        $scope.tempDisplay = '';


      };

    };
  }]);
})();
