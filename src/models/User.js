function UserModel(
) {
  'ngInject';

  return {
    isLogged: () => true,
  };
}

export default angular.module('user.model', []).factory('UserModel', UserModel);
