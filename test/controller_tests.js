describe('calculatorTests', function() {

    beforeEach(module('MainController'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('pythagorean', function() {
        it('should be 9', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.x = 4;
            $scope.y = 8.06225774829855;
            $scope.pythagorean();
            expect($scope.z).toBe(9);
        });
    });

    describe('circumference', function() {
        it('should return circumference of radius of 2', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.x = 2;
            $scope.circumference();
            expect($scope.z).toBe(12.566370614359172);
        });

        it('should return 0', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.x = 0;
            $scope.circumference();
            expect($scope.z).toBe(0);
        });
    });

    describe('greatestCommonDenominator', function() {
        it('should return 6', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.greatestCommonDenominator(24, 18);
            expect($scope.z).toBe(6);
        });
    });

    describe('lowestCommonMultiple', function() {
        it('should return 360360', function() {
            var $scope = {};
            var controller = $controller('mainController', {$scope: $scope});
            $scope.lowestCommonMultiple(1, 13);
            expect($scope.z).toBe(360360);
        });
    });
});
