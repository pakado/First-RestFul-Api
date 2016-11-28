/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/angularjs/angular-route.d.ts"/>
var App;
(function (App) {
    var modules = ["App.Person"];
    angular.module('App', modules)
        .run([]);
})(App || (App = {}));
var App;
(function (App) {
    var Person;
    (function (Person) {
        angular.module('App.Person', []);
    })(Person = App.Person || (App.Person = {}));
})(App || (App = {}));
var App;
(function (App) {
    var Person;
    (function (Person) {
        angular.module("App.Person")
            .controller('PersonCtrl', PersonCtrl);
        var PersonCtrl = (function () {
            function PersonCtrl($scope) {
                this.$scope = $scope;
                this.init();
            }
            PersonCtrl.prototype.init = function () {
                this.$scope.fullName = 'Justin S.';
            };
            PersonCtrl.$inject = ['$scope'];
            return PersonCtrl;
        }());
    })(Person = App.Person || (App.Person = {}));
})(App || (App = {}));
