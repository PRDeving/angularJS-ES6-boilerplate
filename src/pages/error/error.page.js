const errorPage = angular.module('error.page', [
])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('forbidden', {
        url: '/403',
        template: 'access denied',
      })
      .state('not-found', {
        url: '/404',
        template: '404: not found',
      })
      .state('error', {
        url: '/ups',
        template: 'Ups! something went wrong',
      });
  });

export default errorPage;
