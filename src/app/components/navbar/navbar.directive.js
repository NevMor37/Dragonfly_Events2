(function() {
  'use strict';

  angular
    .module('dragonflyApp')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar(eventsFactory) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
      var vm = this;

      // vm.changing_username = false;
      // console.log(eventsFactory.getCurrentUser());
      // vm.user_name = eventsFactory.getCurrentUser();

      // vm.edit_username = edit_username;
      // vm.save_username = save_username;

      // function save_username()
      // {
      //   eventsFactory.setCurrentUser(vm.edit_username);
      //   edit_username();
      // }
      // function edit_username()
      // {
      //   if(vm.changing_username)
      //   {
      //     vm.changing_username = false;
      //   }
      //   else
      //   {
      //     vm.changing_username = true;
      //   }
      // }




      // "vm.creationDate" is available by directive option "bindToController: true"
      //vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
