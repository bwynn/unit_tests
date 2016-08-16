angular.module('MainController', [])
    .controller('mainController', ['$scope', function($scope) {

        $scope.pythagorean = function() {
            return $scope.z = Math.hypot($scope.x, $scope.y);
        };

        $scope.circumference = function() {
            return $scope.z = 2 * Math.PI * $scope.x;
        };

        $scope.greatestCommonDenominator = function(a, b) {
            if (!b) {
                return a;
            }

            $scope.z = $scope.greatestCommonDenominator(b, a % b);
            return $scope.z;
        };

        $scope.lowestCommonMultiple = function(min, max) {
            function range(min, max) {
                var arr = [];
                for (var i = min; i <= max; i++) {
                    arr.push(i);
                }
                return arr;
            }

            function greatestCmnDenom(a, b) {
                return !b ? a : greatestCmnDenom(b, a % b);
            }

            function lcm(a, b) {
                return (a * b) / greatestCmnDenom(a, b);
            }

            var multiple = min;
            range(min, max).forEach(function(n) {
                multiple = lcm(multiple, n);
            });

            return $scope.z = multiple;
        };

    }]);
