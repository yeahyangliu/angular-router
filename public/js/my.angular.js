var myApp = angular.module('myApp',['ngRoute']);


myApp.controller('mainCtr', ['$scope', function($scope){
		$scope.message = 'Main Controller';
		$scope.home = 'home';

	}]);


myApp.controller('techCtr', ['$scope', '$http', function($scope, $http){
		$scope.techList = ["java", "NodeJs", "CSS", "Ruby", "Rails", "CI", "Gradle" ];

		$scope.deleteTech = function(tech) {
			var index = $scope.techList.indexOf(tech);
			$scope.techList.splice(index, 1);

			$http.get('tech/' + tech).success(function(data){
					console.log(data);
			});

			var value = {};
			value[tech] = tech;
			$http.post('tech/', ["arrasy","sss"]).success(function(data){
					console.log(data);
			});
		};
	}]);


myApp.controller('techOneCtr', ['$scope', '$routeParams', function($scope, $routeParams){
		$scope.selectd = $routeParams.name;	

	}]);


myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/tech', 
	 {
		templateUrl : 'partials/tech.html',
		controller : 'techCtr'
	})
	.when('/tech/:name', 
	 {
		templateUrl : 'partials/techOne.html',
		controller : 'techOneCtr'
	})
	.when('/home',
	 {
        templateUrl : 'partials/home.html',
		controller : 'mainCtr'
      });
}])

