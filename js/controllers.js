var app = angular.module('appTemplate',['appServices']);
//controllers
app

	.controller('splashpageCtrl', function($scope, $state, $timeout){
		$timeout(function(){
        	$state.go('shoppingdetails')
        },5000)
	})
	.controller('shoppingdetailsCtrl', function($scope, $state){
		
	})
	.controller('headerCtrl', function($scope, $state){
		var newDate = new Date();
		this.timenow = newDate;
	})
	.controller('shoppinglinksCtrl', function($scope, $state){
		var newDate = new Date();
		this.timenow = newDate;
	})
;