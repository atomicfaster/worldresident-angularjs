
'use strict';

/* Directives */

angular.module('world.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  })
  /*
  .directive('pwCheck', [function () {
    return {
      require: 'ngModel',
      link: function (scope, elem, attrs, ctrl) {
        var firstPassword = '#' + attrs.pwCheck;
        elem.add(firstPassword).on('keyup', function () {
          scope.$apply(function () {
            var v = elem.val()===$(firstPassword).val();
            ctrl.$setValidity('pwmatch', v);
          });
        });
      }
    }
  }])
*/
  .directive('searchBox', [function () {
      return {
          restrict: 'E',
          templateUrl: 'template/search_box.html'
      }
  }])
  .directive('helloHtml', [function () {
      return {
          restrict: 'E',
          templateUrl: 'template/hello.html',
          controller: function ($scope) {
            $scope.user = {
              name: 'awesome user'
            }; 
          }
      }
  }])
  .directive('webFooter', [function () {
      return {
          restrict: 'E',
          templateUrl: 'template/footer.html'
      }
  }]);
