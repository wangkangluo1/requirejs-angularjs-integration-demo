/**
 * Created by kanglewang on 17/3/22.
 */
define('app', ['angular'], function(angular) {
    'use strict';
    var app = angular.module('app', []);
    app.controller('DemoController', ['$scope', function($scope) {
        $scope.message = 'Hello, world!';
    }]);
    return app;
});
