const initialState = {
  user: {
    isLoggedIn: false,
    username: null,
    country: null,
    number: 0,
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: {
          isLoggedIn: true,
          username: action.username,
          country: action.country,
          number: 0,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {
          isLoggedIn: false,
          username: null,
          country: null,
          number: 0,
        },
      };
    case 'INCREMENT':
      return {
        ...state,
        user: {
          ...state.user,
          number: state.user.number + 1,
        },
      };
  }

  return state;
}
