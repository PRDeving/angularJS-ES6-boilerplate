function accessControl(
  $state,
  $rootScope,
  UserModel,
) {
  'ngInject';

  /* eslint-disable no-unused-vars */
  $rootScope.$on('$stateChangeStart', (ev, to, params) => {
    $rootScope.loading = true;
    const isLogged = UserModel.isLogged();
  /* eslint-enable no-unused-vars */
    if (to.loginRequired && !isLogged && to.name !== 'forbidden') {
      ev.preventDefault();
      $state.go('forbidden');
    }
    if (to.redirectIfLogged && isLogged) {
      ev.preventDefault();
      $state.go(to.redirectIfLogged);
    }
  });
  $rootScope.$on('$stateChangeError', () => $state.go('error'));
  $rootScope.$on('$stateNotFound', () => $state.go('not-found'));
  $rootScope.$on('$stateChangeSuccess', () => { $rootScope.loading = false; });
}
export default accessControl;
