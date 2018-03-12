angular.module("dragonflyApp").run(["$templateCache", function($templateCache) {$templateCache.put("app/main/main.html","<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class=\"jumbotron text-center\" ng-show=main.selected_mainevent><h1>{{main.mainevent.name}}</h1><h4>{{main.mainevent.location.city}}</h4><div><div uib-carousel active=active interval=myInterval no-wrap=noWrapSlides><div uib-slide ng-repeat=\"image in main.mainevent.images track by $index\" index=$index><img http-src=\"{{main.getImageUrl(main.mainevent.id, image)}}\" style=margin:auto><div class=carousel-caption><p>{{image.caption}}</p></div></div></div></div><br><uib-accordion close-others=oneAtATime><div uib-accordion-group class=panel-default heading=Description><p><small>{{main.mainevent.description}}</small></p></div><div uib-accordion-group class=panel-danger heading=Comments><div ng-repeat=\"comment in main.mainevent.comments\"><h3>{{comment.from}}</h3><blockquote class=blockquote><p class=mb-0>{{comment.text}}</p></blockquote></div></div><div uib-accordion-group class=panel-default heading=Location><h6>{{main.mainevent.location.name}}</h6><p><small>{{main.mainevent.location.address}}</small></p><p><small>{{main.mainevent.location.city}}, {{main.mainevent.location.state}}</small></p></div></uib-accordion><div class=btn-group ng-hide=main.attendanace_flg><label class=\"btn btn-primary\" ng-model=main.attendanace_flg ng-click=main.updateAttendateMainEvent() uib-btn-checkbox>Go to Event</label></div><div class=btn-group ng-show=main.attendanace_flg><label class=\"btn btn-danger\" ng-model=main.attendanace_flg ng-click=main.updateAttendateMainEvent() uib-btn-checkbox>Cancel Reservation</label></div></div><br><div ng-hide=main.loading_events><h1>Events</h1><div class=row><div class=\"col-sm-6 col-md-4\" ng-repeat=\"event in main.events track by $index\"><div class=thumbnail ng-click=main.setMainEvent(event)><!--<img class=\"pull-right\" src=\"assets/images/yeoman.png\" alt=\"I\'m Yeoman\">--> <img class=pull-right http-src={{main.getThumbnailUrl(event)}}><div class=caption><h3>{{ event.name }}</h3><p>{{ event.location.city }}</p><p><a ng-href={{event.url}}>{{ event.url }}</a></p></div></div></div></div></div><div ng-show=main.loading_events><h1>Loading events...</h1></div></div>");
$templateCache.put("app/components/navbar/navbar.html","<nav class=\"navbar navbar-static-top navbar-inverse\"><div class=container-fluid><div class=navbar-header><h2 class=navbar-brand ng-click=vm.edit_username()><span class=\"glyphicon glyphicon-home\"></span> Events App</h2><!--       <div class=\"form-group\" ng-show=\"vm.changing_username\">\n        <label class=\"navbar-brand\">Username:</label>\n        <input type=\"text\" ng-model=\"vm.user_name\" class=\"form-control\">\n        <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.save_username()\">\n        Save\n        </button>\n      </div> --></div></div></nav>");}]);