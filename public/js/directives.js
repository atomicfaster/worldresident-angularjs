
'use strict';

/* Directives */

angular.module('world.directives', []).
  directive('appVersion', function (version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  })

  /*.directive('pwCheck', [function () {
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
    }])*/

    .directive('myLogin', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/login.html'
    };
  })
    .directive('mySearchbox', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/search_box.html'
    };
  })
    .directive('myFooter', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/footer.html'
    };
  });
