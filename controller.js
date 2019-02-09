
var app = angular.module('myAppOne', ["ngRoute"]);
/*app.config(["$routeProvider", function($routeProvider) 
{
    $routeProvider
	.when("/", {
        templateUrl : "http://localhost:8080/Project_Task/Login.html",
		controller : "myCtrlOne"
    })
    .when("/home", {
        templateUrl : "Home.html",
		controller : "myCtrlOne"
    })
	.otherwise({
		redirectTo: '/'
	});
}]);*/
app.controller('myCtrlOne', function($scope,$location,$window) {
	$scope.checkValue = false;
    $scope.reset = function(){
		$scope.name = '';
	}
	$scope.$watch('name',function ()
	{
		console.log("the name value is changed",name);
	})
	/*$http({
        method : "JSONP",
        url : "F:\Softwares\My Codes\Project_Task\WebContent\data.json"
    }).then(function mySuccess(response) {
        $scope.userInsurance = response.data;
    }, function myError(response) {
        $scope.userInsurance = response.statusText;
    });*/
	$scope.submitLogin = function()
	{
		if($scope.name == "akshay" && $scope.password == "akshay")
		{
			//$window.location.assign('/home');
			$window.location.href = "Home.html";
			//$location.path('/home');			
			console.log($scope.name);
			console.log($location.path());
			$scope.myUrl = $location.absUrl();
			console.log($scope.myUrl);
		}
		else
		{
			alert("Invalid Credentials");
		}
	};
});
var app=angular.module('myAppTwo',[]);
app.controller('myCtrlTwo',function($scope)
{
	$scope.checkValue = false;
$scope.insuranceList=['Life Insurance','Health Insurance','Casualty Insurance'];
$scope.annualDisable = function(value){
	if(value == true)
		$scope.checkValueSix = true;
	else
		$scope.checkValueSix = false;

}
$scope.sixDisable = function(value){
	if(value == true)
		$scope.checkValueAnnual = true;
	else
		$scope.checkValueAnnual = false;
}
$scope.display= function()
{
if($scope.selectedInsurance=='Life Insurance')
{
$scope.lifeFlag=true;
$scope.healthFlag=false;
$scope.casualtyFlag=false;
}
else if($scope.selectedInsurance=='Health Insurance')
{
$scope.lifeFlag=false;
$scope.healthFlag=true;
$scope.casualtyFlag=false;
}
else
{
$scope.lifeFlag=false;
$scope.healthFlag=false;
$scope.casualtyFlag=true;
}
}
});
var app=angular.module('myAppThree',["ngRoute"]);
app.controller('myCtrlThree',function($scope)

{
	$scope.checkValue = false;
	$scope.confirmUser=function()
	{
		alert("Are you sure? Do you want to Proceed?")
	}
	$scope.randomGenerator = function()
	{
		var x = Math.floor((Math.random() * 1000000000) + 1);
		document.getElementById("demo").innerHTML = x;
		$scope.random=!$scope.random;
	}
});
app.config(function($routeProvider)
{
	$routeProvider.when("/confirmation",{
		templateUrl : "Confirmation.html"
	})
});

