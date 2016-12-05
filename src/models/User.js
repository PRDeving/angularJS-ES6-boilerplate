function UserModel(
  // $cookies,
  // $q,
  // Services
) {
  'ngInject';

  // let token;
  // let name;
  // let lastName;
  // let nif;
  //
  // #<{(| eslint no-console: 0 |)}>#
  // const checkSession = () => {
  //   token = $cookies.get('token');
  //   if (token) {
  //     Services.configure({ token });
  //     return provision();
  //   }
  //   return false;
  // };
  //
  // let def;
  // const provision = () => {
  //   if (!!token && !!name) {
  //     def = $q.defer();
  //     def.resolve(() => { def = false; return true; });
  //   } else if (!def) {
  //     def = $q.defer();
  //     console.log('retrieves user from EP');
  //     Services.getUser()
  //       .then(ans => {
  //         provide(ans.data);
  //         def.resolve(() => { def = false; return true; });
  //         def.reject(() => { def = false; return false; });
  //       });
  //   }
  //   return def.promise;
  // };
  //
  // const provide = data => {
  //   const ts = Date.now();
  //   if (data.token) token = data.token;
  //   $cookies.put('token', token, { expires: new Date(ts + 360000) });
  //   if (data.name) name = data.name;
  //   if (data.lastName) lastName = data.lastName;
  //   if (data.nif) nif = data.nif;
  // };
  //
  // const cleanSession = () => {
  //   token = '';
  //   name = '';
  //   lastName = '';
  //   nif = '';
  //   $cookies.remove('token');
  // };
  // const logout = () => { if (!!token) cleanSession(); };

  return {
    isLogged: () => true,
    // getToken: () => token,
    // getName: () => name,
    // getLastName: () => lastName,
    // getFullName: () => `${name} ${lastName}`,
    // getNif: () => nif,
    //
    // isLogged: () => !!token,
    // isReady: () => checkSession(),
    //
    // checkSession,
    // provide,
    // logout,
  };
}

export default angular.module('user.model', []).factory('UserModel', UserModel);
