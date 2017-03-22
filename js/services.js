var app = angular.module('appServices',['ui.router', 'ui.bootstrap']);
//config
app
    .factory('promoitems', function(){
        var promoitems = [{
                "itemdesc":"COCA COLA CAN",
                "itemamt":"P30.00",
                "promodetail":"BUY 2 TAKE 1 FREE",
                "itemimg":"/img/coke.png"
            },{
                "itemdesc":"OREO",
                "itemamt":"P10.00",
                "promodetail":"5% OFF",
                "itemimg":"/img/oreo.png"
            },{
                "itemdesc":"DOVE",
                "itemamt":"P45.00",
                "promodetail":"5% OFF",
                "itemimg":"/img/dove.png"
            },{
                "itemdesc":"JOY DISHWASHING LIQUID",
                "itemamt":"P40.00",
                "promodetail":"5% OFF",
                "itemimg":"/img/joy.png"
            },{
                "itemdesc":"CHAMPION DETERGENT",
                "itemamt":"P6.00",
                "promodetail":"2 FOR P10.00",
                "itemimg":"/img/champ.png"
            }];
        return promoitems;
    })
    .factory('aisle', function(){
        var aisleitem = [{
                "aisle":"1",
                "cat":"FRESH PRODUCE",
                "description":"FRESH FRUITS, FRESH HERBS, FRESH VEGETABLES",
                "itemimg":"/img/produce2.png"
            },{
                "aisle":"2",
                "cat":"MEAT & SEAFOOD",
                "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
                "itemimg":"/img/meat2.png"
            },{
                "aisle":"3",
                "cat":"DAIRY & EGGS",
                "description":"CONDENSED MILK, CREAM, EGGS, EVAPORATED MILK",
                "itemimg":"/img/dairy2.png"
            },{
                "aisle":"4",
                "cat":"BAKERY",
                "description":"BREAD, BUNS & ROLLS, TORTILLA & FLAT BREAD",
                "itemimg":"/img/bakery2.png"
            },{
                "aisle":"5",
                "cat":"BREAKFAST",
                "description":"CEREAL, HOT CEREAL & PANCAKES",
                "itemimg":"/img/meat2.png"
            },{
                "aisle":"6",
                "cat":"FROZEN",
                "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
                "itemimg":"/img/bfast2.png"
            },{
                "aisle":"7",
                "cat":"PANTRY",
                "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
                "itemimg":"/img/pantry2.png"
            },{
                "aisle":"8",
                "cat":"CANNED GOODS",
                "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
                "itemimg":"/img/can2.png"
            },{
                "aisle":"9",
                "cat":"PASTA & DRIED",
                "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
                "itemimg":"/img/pasta2.png"
            },{
                "aisle":"10",
                "cat":"BEVERAGES",
                "description":"HOTDOGS, BACON & SAUSAGES, MEAT COUNTER, POULTRY",
                "itemimg":"/img/beverages2.png"
            }];
        return aisleitem;
    })
    ;
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
        }).
        state('promoitems', {
           url: '/promoitems',
            templateUrl: 'template/promo.tpl.html',
            controller: 'promoCtrl'  
        }).
        state('aisle', {
           url: '/aisle',
            templateUrl: 'template/aisles.tpl.html',
            controller: 'aisleCtrl'  
        })
        ;
        
}]);