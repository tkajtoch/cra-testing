export const actions = {
  login(username, country) {
    return {
      type: 'LOGIN',
      username,
      country,
    };
  },
  logout() {
    return {
      type: 'LOGOUT',
    };
  },
  increment() {
    return {
      type: 'INCREMENT',
    };
  },
};
