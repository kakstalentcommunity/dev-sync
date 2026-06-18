import {
  createContext,
  useEffect,
  useReducer
} from "react";

import {
  authReducer,
  initialAuthState
} from "../reducers/authReducer";

export const AuthContext = createContext();

const STORAGE_KEY = "devsync-users";

const getInitialAuthState = () => {

  let savedUsers = null;

  try {
    savedUsers =
      localStorage.getItem(STORAGE_KEY);
  } catch {
    return initialAuthState;
  }

  if (!savedUsers) {
    return initialAuthState;
  }

  try {
    return {
      ...initialAuthState,
      users: JSON.parse(savedUsers)
    };
  } catch {
    return initialAuthState;
  }
};

const AuthProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    authReducer,
    initialAuthState,
    getInitialAuthState
  );

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state.users)
      );
    } catch {
      console.warn(
        "Unable to save registered users."
      );
    }
  }, [state.users]);

  return (
    <AuthContext.Provider
      value={{ state, dispatch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
