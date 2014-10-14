"use strict";angular.module("danielApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("danielApp").controller("MainCtrl",["$scope",function(a){a.areasOfInterest=[{name:"python",skills:["django","pandas","flask"]},{name:"javascript",skills:["angular","grunt","node","bower","yeoman","express"]}]}]),angular.module("danielApp").directive("ripple",function(){return{restrict:"A",link:function(a,b){angular.element(b).on("click",function(a){var b=$("<div/>"),c=$(this).offset(),d=a.pageX-c.left,e=a.pageY-c.top;b.addClass("ripple-effect");var f=$(".ripple-effect");f.css("height",$(this).height()),f.css("width",$(this).height()),b.css({top:e-f.height()/2,left:d-f.width()/2,background:$(this).data("ripple-color")}).appendTo($(this)),window.setTimeout(function(){b.remove()},2e3)})}}}),angular.module("danielApp").controller("ContactCtrl",["$scope",function(a){a.contacts=[{service:"linkedin",link:"https://www.linkedin.com/profile/view?id=179281890"},{service:"email",link:"mailto:borzecki.daniel@gmail.com"},{service:"github.com",link:"https://github.com/borzecki"}]}]),angular.module("danielApp").controller("HeaderCtrl",["$scope","$location",function(a,b){a.isActive=function(a){return console.log(b.path()),a===b.path()}}]);