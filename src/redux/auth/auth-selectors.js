const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const getErrorLogin = state => state.auth.errorLogin;

const getErrorRegister = state => state.auth.errorRegister;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrentUser,
  getErrorLogin,
  getErrorRegister,
};

export default authSelectors;
