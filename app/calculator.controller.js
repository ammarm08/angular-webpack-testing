export default function CalculatorController($scope) {
	$scope.total = 0;
	$scope.increment = function(num) {
		$scope.total = num === undefined ? $scope.total + 1 : $scope.total + num;
	}
}