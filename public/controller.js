var myApp = angular.module('myApp', []);

var eduData = [];
var skillData=[];
var projectData=[];

myApp.controller('AppCtrl', ['$scope', '$http', 
	function($scope, $http) {

    var refresh = function(){
        $http.get('/resume').success(function(response){
        	console.log("Got data!");
        	console.log(response);

//divide data into arrays
        	for(var index in response){
        		console.log(response[index].type);
        		if( response[index].type=== "edu"){
        			eduData.push(response[index]);
        		}
        		else if(response[index].type==="skill"){
        			skillData.push(response[index]);
        		} else {
        			projectData.push(response[index]);
        		}
			}



            $scope.eduList = eduData;
            $scope.skillList = skillData;
            $scope.projectList = projectData;
            console.log($scope.eduList);
        });
    };
    refresh();

}]);