import { FaCodeBranch }
from "react-icons/fa";

const Header = () => {

  return (
    <header className="site-header">

      <div className="site-brand">
        <span className="site-logo">
          <FaCodeBranch />
        </span>

        <div>
          <h1>DevSync</h1>
          <p>Team tasks, attendance, and analytics in one place.</p>
        </div>
      </div>

    </header>
  );
};

export default Header;
