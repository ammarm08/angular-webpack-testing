import expect from 'expect';

describe('calculator', function () {
  beforeEach(angular.mock.module('calculatorApp'));

  let $controller;

  beforeEach(angular.mock.inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('increment', function () {
    it('should increment the total by 1 by default', function () {
      let $scope = {};
      let controller = $controller('CalculatorController', { $scope: $scope });
      $scope.total = 0;
      $scope.increment();
      expect($scope.total).toBe(1);
    }); 

    it('should increment the total by whatever number is passed to the Increment function', function () {
      let $scope = {};
      let controller = $controller('CalculatorController', { $scope: $scope });
      $scope.total = 0;
      $scope.increment(5);
      expect($scope.total).toBe(5);
    });

    it('should repeatedly increment total every time Increment is called', function () {
      let $scope = {};
      let controller = $controller('CalculatorController', { $scope: $scope });
      $scope.total = 0;
      $scope.increment(5);
      $scope.increment();
      expect($scope.total).toBe(6);
    });
  });

});