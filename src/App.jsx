import {
  useContext
} from "react";

import Dashboard
from "./pages/Dashboard";

import Login
from "./pages/Login";

import "./App.css";

import AuthProvider
from "./context/AuthContext";

import { AuthContext }
from "./context/AuthContext";

import TaskProvider
from "./context/TaskContext";

import ThemeProvider
from "./context/ThemeContext";

import NotificationProvider
from "./context/NotificationContext";

import ErrorBoundary
from "./components/common/ErrorBoundary";

const AppContent = () => {

  const { state } =
    useContext(AuthContext);

  return state.isAuthenticated
    ? <Dashboard />
    : <Login />;
};

const App = () => {

  return (

    <ThemeProvider>

      <AuthProvider>

        <NotificationProvider>

          <TaskProvider>

            <ErrorBoundary>

              <AppContent />

            </ErrorBoundary>

          </TaskProvider>

        </NotificationProvider>

      </AuthProvider>

    </ThemeProvider>

  );
};

export default App;
