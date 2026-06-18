import {
  useContext,
  useState
} from "react";

import { FaArrowRight, FaUserCircle, FaUserPlus }
from "react-icons/fa";

import Input from "../common/Input";
import Button from "../common/Button";

import useInput from "../../hooks/useInput";

import { AuthContext }
from "../../context/AuthContext";

import { NotificationContext }
from "../../context/NotificationContext";

const LoginForm = () => {

  const [
    isSignUp,
    setIsSignUp
  ] = useState(false);

  const username =
    useInput("");

  const password =
    useInput("");

  const { state, dispatch } =
    useContext(AuthContext);

  const {
    dispatch: notify
  } = useContext(NotificationContext);

  const showNotification = (
    message,
    type = "error"
  ) => {
    notify({
      type: "SHOW_NOTIFICATION",
      payload: {
        message,
        type
      }
    });
  };

  const resetForm = () => {
    username.reset();
    password.reset();
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const name = username.value.trim();
    const enteredPassword =
      password.value.trim();

    if (!name || !enteredPassword) {
      showNotification(
        "Please enter both username and password.",
        "warning"
      );
      return;
    }

    if (name.length < 3) {
      showNotification(
        "Username must be at least 3 characters.",
        "warning"
      );
      return;
    }

    if (enteredPassword.length < 4) {
      showNotification(
        "Password must be at least 4 characters.",
        "warning"
      );
      return;
    }

    const registeredUser =
      state.users.find((user) =>
        user.name.toLowerCase() ===
          name.toLowerCase()
      );

    if (isSignUp) {
      if (registeredUser) {
        showNotification(
          "This username is already registered.",
          "warning"
        );
        return;
      }

      const newUser = {
        name,
        password: enteredPassword
      };

      dispatch({
        type: "REGISTER",
        payload: newUser
      });

      dispatch({
        type: "LOGIN",
        payload: {
          name
        }
      });

      showNotification(
        "Account created successfully.",
        "success"
      );

      resetForm();
      return;
    }

    if (
      !registeredUser ||
      registeredUser.password !== enteredPassword
    ) {
      showNotification(
        "Incorrect username or password.",
        "error"
      );
      return;
    }

    dispatch({
      type: "LOGIN",
      payload: {
        name: registeredUser.name
      }
    });

    notify({
      type: "CLEAR_NOTIFICATION"
    });

    resetForm();
  };

  return (
    <form
      className="login-form form-card"
      onSubmit={handleSubmit}
    >

      <div className="form-header">
        <div className="form-icon">
          <FaUserCircle />
        </div>

        <div>
          <h2>
            {isSignUp
              ? "Create Account"
              : "Welcome Back"}
          </h2>
          <p>
            {isSignUp
              ? "Register to start using DevSync."
              : "Sign in to manage your workspace."}
          </p>
        </div>
      </div>

      <div className="form-body">
        <label>
          Username
          <Input
            type="text"
            placeholder="Enter username"
            value={username.value}
            onChange={username.onChange}
          />
        </label>

        <label>
          Password
          <Input
            type="password"
            placeholder="Enter password"
            value={password.value}
            onChange={password.onChange}
          />
        </label>
      </div>

      <div className="form-footer">
        <button
          type="button"
          className="auth-toggle"
          onClick={() => {
            setIsSignUp(
              (currentValue) => !currentValue
            );
            resetForm();
            notify({
              type: "CLEAR_NOTIFICATION"
            });
          }}
        >
          {isSignUp
            ? "Already have an account?"
            : "Need an account?"}
        </button>

        <Button
          type="submit"
          className="primary-btn"
          text={
            <>
              {isSignUp
                ? "Sign Up"
                : "Login"}
              {isSignUp
                ? <FaUserPlus />
                : <FaArrowRight />}
            </>
          }
        />
      </div>

    </form>
  );
};

export default LoginForm;
