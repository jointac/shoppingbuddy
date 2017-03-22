var app = angular.module('appTemplate',['appServices']);
//controllers
app

	.controller('splashpageCtrl', function($scope, $window, $state, $timeout){
		$timeout(function(){
        	$state.go('shoppingdetails')
        },5000)
	})
	.controller('shoppingdetailsCtrl', function($scope, $window, $state){
		var ctrl = this;
		$scope.error = false;
		//var $item = {'category':'fruits','item':'banana','qty':2};
		//$window.$globalcart.push($item);
		$scope.proceednow = function() {
			if ($.isNumeric(ctrl.txtAmt)) {
				$window.$globalbudget = ctrl.txtAmt;
				$state.go('shoppinglinks')
			} else {
				$scope.error = true;
			}
		}
	})
	.controller('headerCtrl', function($scope, $state){
		var dayarr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
		var newDate = new Date();
		var daytoday = dayarr[newDate.getDay()];
		this.timenow = daytoday + ", " + newDate.getHours() + ":" + newDate.getMinutes();
	})
	.controller('shoppinglinksCtrl', function($scope, $window, $state){
		var newDate = new Date();
		this.timenow = newDate;
		$scope.windowheight = ($(window).height() - 80).toString() + "px";
		/*var $item = {'category':'fruits','item':'banana','qty':2};
		$window.$globalcart.push($item);*/
		$scope.goto = function(link) {
			var $url = 'shoppinglinks';
			switch(link) {
				case 2:
					$url = 'aisle';
					break;
				case 4:
					$url = 'promoitems';
					break;
			}
			$state.go($url);
		}
	})
	.controller('promoCtrl', function($scope, $window, $state, promoitems){
		$scope.windowheight = ($(window).height() - 80).toString() + "px";
		$scope.detailheight = (($(window).height() - 80) - 100 - 100).toString() + "px";
		$scope.items = promoitems;
	})
	.controller('aisleCtrl', function($scope, $window, $state, aisle){
		$scope.windowheight = ($(window).height() - 80).toString() + "px";
		$scope.detailheight = (($(window).height() - 80) - 70).toString() + "px";
		$scope.aisleitems = aisle;
		$scope.goback = function(){
			$state.go('shoppinglinks');
		}
	})
;