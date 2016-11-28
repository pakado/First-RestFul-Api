/**
 * Created by pkdo10 on 10/20/2016.
 */
angular.module('app',['MainServices'])
    .controller('MainCtrl',function(firstService){
        var vm = this;
        firstService.data()
            .success(function(res){
               vm.message =  res;
            })
            .error(function(res){
               vm.message =  res;
            });
    });