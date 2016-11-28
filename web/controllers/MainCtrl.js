/// <reference path="../typings/angularjs/angular.d.ts"/>
var App;
(function (App) {
    var Ctrl = (function () {
        function Ctrl($scope, $http) {
            this.count2 = 3;
            console.log("Typesscript");
            $scope.count1 = 1;
            this.updateAccount();
        }
        Ctrl.prototype.updateAccount = function () {
            //console.log(this.$http.get("/api/hello"));
            this.count2 = 6;
        };
        Ctrl.$inject = ['$http'];
        return Ctrl;
    }());
    App.Ctrl = Ctrl;
})(App || (App = {}));
angular.module("myApp", [])
    .controller("ctrl", App.Ctrl);
