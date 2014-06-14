'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('world.services', ['ngResource']).
  value('version', '0.1')
  .factory('Building', ['$resource',
  function ($resource){
    return $resource('/building', {}, {
      //query:
      //update:
      //delete:
      //post:
      post: {method:'POST', params:{building:{}}, isArray:false},
      query: {method: 'GET', params:{}, isArray:true}
    });
  }]);
