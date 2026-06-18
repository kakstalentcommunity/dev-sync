export const initialAuthState = {
  user: null,
  isAuthenticated: false,
  users: []
};

export const authReducer = (state, action) => {

  switch (action.type) {

    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      };

    case "REGISTER":
      return {
        ...state,
        users: [
          ...state.users,
          action.payload
        ]
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };

    default:
      return state;
  }

};
