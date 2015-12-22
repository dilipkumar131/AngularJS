angular.module("diveLog", [])
    .controller('diveLogCtrl', DiveLogCtrl);

function DiveLogCtrl($scope) {
    var index = 0;
    $scope.dives = [];

    $scope.addDive = function () {
        if ($scope.enableAdd()) {
            $scope.dives.push(dives[index++]);
        }
    }

    $scope.clearDives = function () {
        $scope.dives = [];
        index = 0;
    }

    $scope.enableAdd = function () {
        return index < dives.length;
    }
}
