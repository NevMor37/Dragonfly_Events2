!function(){"use strict";angular.module("dragonflyApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr","angular.img"])}(),function(){"use strict";function n(n){function e(){}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}n.$inject=["eventsFactory"],angular.module("dragonflyApp").directive("acmeNavbar",n)}(),function(){"use strict";function n(n,e,t,a){function i(){n(function(){v.classAnimation="rubberBand"},4e3)}function o(){e.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),v.classAnimation=""}function r(n){v.loading_events=!1,v.events=n}function l(n){console.log("updating attendate result"),console.log(n),""===n&&e.error("Error getting event status from server"),v.attendanace_flg=n.coming}function s(){"id"in v.mainevent&&t.getEventStatus(v.mainevent.id,v.user_name).then(l)}function c(){console.log("inside updateAttendateResult "+v.attendanace_flg),console.log("updateAttendateMainEvent:::this the evewnt id "+v.mainevent.id),t.modifyEvent(v.mainevent.id,v.user_name,v.attendanace_flg).then(function(){})}function d(n){v.selected_mainevent=!0,v.mainevent=n,console.log("setMainEvent:::this the evewnt id "+n.id)}function u(n){return"id"in n&&"images"in n&&n.images.length>0?"http://dev.dragonflyathletics.com:1337/api/dfkey/events/"+n.id+"/media/"+n.images[0].id:""}function m(n,e){return"http://dev.dragonflyathletics.com:1337/api/dfkey/events/"+n+"/media/"+e.id}var v=this;v.user_name="shubinwu",v.attendanace_flg=!0,v.selected_mainevent=!1,v.mainevent={},v.mainevent.location={},v.mainevent.location.city="",v.awesomeThings=[],v.events=[],v.loading_events=!0,v.classAnimation="",v.creationDate=1520721760682,v.showToastr=o,v.getThumbnailUrl=u,v.setMainEvent=d,v.getImageUrl=m,v.updateAttendateMainEvent=c,i(),t.listEvents().then(r),a(s,4e3)}n.$inject=["$timeout","toastr","eventsFactory","$interval"],angular.module("dragonflyApp").controller("MainController",n)}(),function(){"use strict";angular.module("dragonflyApp").factory("httpRequestInterceptor",["$rootScope",function(n){return{request:function(n){return n.headers.Authorization="Basic "+window.btoa("FAKKEE:evalpass"),n}}}])}(),function(){"use strict";angular.module("dragonflyApp").factory("eventsFactory",["$q","$http","toastr","$cookies","$rootScope",function(n,e,t,a,i){function o(e){return"PUT"===e.config.method&&t.info("Succesfully updated attendance for event"),console.log(e),n.resolve(e.data)}function r(e){return"PUT"===e.config.method&&t.error("Unable to update attendance for event"),console.log(e),console.log("There was an error"),n.reject(e)}function l(){var n=u+"events";return e.get(n).then(o,r)}function s(n,t){var a=u+"events/"+n+"/status/"+t;return e.get(a).then(o,r)}function c(n,t,a){var i={coming:a},l=u+"events/"+n+"/status/"+t;return e.put(l,i).then(o,r)}var d={listEvents:l,getEventStatus:s,modifyEvent:c},u="http://dev.dragonflyathletics.com:1337/api/dfkey/";return d}])}(),function(){"use strict";function n(n){n.debug("runBlock end")}n.$inject=["$log"],angular.module("dragonflyApp").run(n)}(),function(){"use strict";function n(n,e){n.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider"],angular.module("dragonflyApp").config(n)}(),function(){"use strict";angular.module("dragonflyApp")}(),function(){"use strict";function n(n,e,t){n.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0,t.interceptors.push("httpRequestInterceptor")}n.$inject=["$logProvider","toastrConfig","$httpProvider"],angular.module("dragonflyApp").config(n)}(),angular.module("dragonflyApp").run(["$templateCache",function(n){n.put("app/main/main.html",'<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class="jumbotron text-center" ng-show=main.selected_mainevent><h1>{{main.mainevent.name}}</h1><h4>{{main.mainevent.location.city}}</h4><div><div uib-carousel active=active interval=myInterval no-wrap=noWrapSlides><div uib-slide ng-repeat="image in main.mainevent.images track by $index" index=$index><img http-src="{{main.getImageUrl(main.mainevent.id, image)}}" style=margin:auto><div class=carousel-caption><p>{{image.caption}}</p></div></div></div></div><br><uib-accordion close-others=oneAtATime><div uib-accordion-group class=panel-default heading=Description><p><small>{{main.mainevent.description}}</small></p></div><div uib-accordion-group class=panel-danger heading=Comments><div ng-repeat="comment in main.mainevent.comments"><h3>{{comment.from}}</h3><blockquote class=blockquote><p class=mb-0>{{comment.text}}</p></blockquote></div></div><div uib-accordion-group class=panel-default heading=Location><h6>{{main.mainevent.location.name}}</h6><p><small>{{main.mainevent.location.address}}</small></p><p><small>{{main.mainevent.location.city}}, {{main.mainevent.location.state}}</small></p></div></uib-accordion><div class=btn-group ng-hide=main.attendanace_flg><label class="btn btn-primary" ng-model=main.attendanace_flg ng-click=main.updateAttendateMainEvent() uib-btn-checkbox>Go to Event</label></div><div class=btn-group ng-show=main.attendanace_flg><label class="btn btn-danger" ng-model=main.attendanace_flg ng-click=main.updateAttendateMainEvent() uib-btn-checkbox>Cancel Reservation</label></div></div><br><div ng-hide=main.loading_events><h1>Events</h1><div class=row><div class="col-sm-6 col-md-4" ng-repeat="event in main.events track by $index"><div class=thumbnail ng-click=main.setMainEvent(event)><!--<img class="pull-right" src="assets/images/yeoman.png" alt="I\'m Yeoman">--> <img class=pull-right http-src={{main.getThumbnailUrl(event)}}><div class=caption><h3>{{ event.name }}</h3><p>{{ event.location.city }}</p><p><a ng-href={{event.url}}>{{ event.url }}</a></p></div></div></div></div></div><div ng-show=main.loading_events><h1>Loading events...</h1></div></div>'),n.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><h2 class=navbar-brand ng-click=vm.edit_username()><span class="glyphicon glyphicon-home"></span> Events App</h2><!--       <div class="form-group" ng-show="vm.changing_username">\n        <label class="navbar-brand">Username:</label>\n        <input type="text" ng-model="vm.user_name" class="form-control">\n        <button type="button" class="btn btn-primary" ng-click="vm.save_username()">\n        Save\n        </button>\n      </div> --></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-43229c1440.js.map
