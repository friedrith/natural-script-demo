'use strict';
app.controller('MainCtrl', function($scope, $timeout, socket) {

    $scope.englishExpression = 'What time will it be tomorrow in London?';
    $scope.scriptExpression = 'what time will it be {{date}} {{capital_city}}?';

    $scope.waiting = false;

    $scope.result = '';
    $scope.type = '';

    $scope.timeout = null;

    socket.on('/parsed', function (result) {
        if (typeof result == 'boolean') {
            if (result) {
                $scope.type = 'true';
            } else {
                $scope.type = 'false';
            }
        } else if (typeof result == 'object') {
            $scope.type = 'object';
            console.log(JSON.stringify(result, null, '\t'));
            $scope.result = result;

        }
        console.log(result);
        $scope.waiting = false;
        if ($scope.timeout) {
            $scope.timeout.cancel();
            $scope.timeout = null;
        }
    });

    $scope.parse = function () {
        $scope.waiting = false;
        $scope.Result = '';
        // $scope.timeout = $timeout(function () {
        //     $scope.waiting = true;
        // }, 500);

        socket.emit('/parse', {
            english: $scope.englishExpression,
            script: $scope.scriptExpression
        });
    }


    $scope.parse();

    $scope.ready = true;

});
