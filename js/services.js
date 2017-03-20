var app = angular.module('appServices',['ui.router', 'ui.bootstrap']);
//config
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider.
        state('index', {
            url: '/index',
            templateUrl: 'template/splashpage.tpl.html',
            controller: 'splashpageCtrl' 
        }).
        state('shoppingdetails', {
           url: '/shoppingdetails',
            templateUrl: 'template/shoppingdetails.tpl.html',
            controller: 'shoppingdetailsCtrl'  
        }).
        state('shoppinglinks', {
           url: '/shoppinglinks',
            templateUrl: 'template/shoppinglinks.tpl.html',
            controller: 'shoppinglinksCtrl'  
        })
        ;
}]);