(function() {
  'use strict';


angular.module('dragonflyApp')
.factory('httpRequestInterceptor',
['$rootScope', function($rootScope)
 {
  return {
   request: function($config) {


   	// if($rootScope.user === undefined)
   	// {
   		$config.headers['Authorization'] = "Basic " +  window.btoa("FAKKEE" +  ":evalpass");
   	// }

   	// // else
   	// // {
   	// // 	$config.headers['Authorization'] = "Basic " +  window.btoa($rootScope.user +  ":evalpass");
   	// // }

     



  return $config;
  }
 };
}]);



})();