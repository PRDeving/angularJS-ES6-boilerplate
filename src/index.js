import middlewareModule from 'modules/middleware/middleware.setup.js';
import appController from 'controllers/app.controller.js';

import userModel from 'models/User.js';

import homePage from 'pages/home/home.page.js';
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
])
  .controller('appController', appController)
  .run(middlewareModule);

// Launch angular when App has been created
angular.bootstrap(document, ['App']);
