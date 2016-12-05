// import routes from 'config/routes.js';
import middlewareModule from 'modules/middleware/middleware.setup.js';
// import Services from 'config/services.js';
import appController from 'controllers/app.controller.js';
//
import userModel from 'models/User.js';

import homePage from 'pages/home/home.page.js';
// import loginPage from 'pages/login/login.page.js';
// import registerPage from 'pages/register/register.page.js';
// import dashboardPage from 'pages/dashboard/dashboard.page.js';
//
// import navMenuModule from 'modules/navmenu/navmenu.module.js';
import errorPage from 'pages/error/error.page.js';

/* eslint-disable no-unused-vars */
const App = angular.module('App', [
/* eslint-enable no-unused-vars */
  'ui.router',
  'ngMessages',
  'ngCookies',

  userModel.name,

  errorPage.name,

  homePage.name,
  // loginPage.name,
  // registerPage.name,
  // dashboardPage.name,
])
  // .factory('Services', Services)
  // .factory('UserModel', UserModel)
  .controller('appController', appController)
  // .directive('navMenu', navMenuModule)
  .run(middlewareModule);
  // .config(routes);

// Launch angular when App has been created
angular.bootstrap(document, ['App']);
