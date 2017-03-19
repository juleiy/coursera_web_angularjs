(function () {
    'use strict';

    var app = angular.module('LunchCheck', []);

    app.controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function  LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.message = "";
        $scope.msgStyle = {};
        $scope.txtBoxStyle = {};

        $scope.checkLunch = function () {
            var count = countLunchItems($scope.lunchItems);
            if(count <= 0) {
                $scope.message = "Please enter data first";
                $scope.msgStyle = {"color":"red"};
                $scope.txtBoxStyle = {"border-color":"red"};
            }
            else if(count <= 3) {
                $scope.message = "Enjoy!";
                $scope.msgStyle = {"color":"green"};
                $scope.txtBoxStyle = {"border-color":"green"};
            }
            else {
                $scope.message = "Too much!";
                $scope.msgStyle = {"color":"green"};
                $scope.txtBoxStyle = {"border-color":"green"};
            }
        }
    }

    function countLunchItems(stringToSplit) {
        var items = stringToSplit.split(",");
        console.log(items);
        var count = 0;
        for(var i=0;i<items.length;i++) {
            if(items[i].trim()!="") count++;
        }
        return count;
    }

})();