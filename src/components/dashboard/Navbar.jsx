import { useContext } from "react";

import { FaBars }
from "react-icons/fa";

import { AuthContext }
from "../../context/AuthContext";

const Navbar = ({
  onToggleSidebar
}) => {

  const { state, dispatch } =
    useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT"
    });
  };

  return (
    <header className="navbar">

      <div className="navbar-brand">

        <button
          type="button"
          className="sidebar-toggle"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <FaBars />
        </button>

        <h2>DevSync</h2>

      </div>

      {state.user && (
        <div className="navbar-user">
          <p>
            Welcome,
            {state.user.name}
          </p>

          <button
            type="button"
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}

    </header>
  );
};

export default Navbar;
