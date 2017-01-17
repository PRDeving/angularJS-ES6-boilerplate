import homeController from './home.controller.js';
import homeTemplate from './home.template.html';

const homePage = angular.module('home.page', [])
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('home', {
        url: '/home',
        template: homeTemplate,
        controller: homeController,
        loginRequired: true,
      });
  });

export default homePage;
