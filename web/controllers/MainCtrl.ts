/// <reference path="../typings/angularjs/angular.d.ts"/>

module App{

    export class Ctrl{
        count1: number;
        count2: number = 3;
        static $inject:string[] = ['$http'];
        constructor($scope, $http:ng.IHttpService) {
            console.log("Typesscript");
            $scope.count1 = 1;
            this.updateAccount();
        }

        public updateAccount():void {
            //console.log(this.$http.get("/api/hello"));
            this.count2 = 6;
        }
    }
}

angular.module("myApp",[])
    .controller("ctrl",App.Ctrl);