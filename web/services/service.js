/**
 * Created by pkdo10 on 10/22/2016.
 */
angular.module('MainServices',[])
       .service('firstService', function($http){

        this.data = function(){
            return $http.get("/api/hello")
                .success(function(res){
                    return res.data;
            })
            .error(function(){
                    return "error message";
                });
        }
    });