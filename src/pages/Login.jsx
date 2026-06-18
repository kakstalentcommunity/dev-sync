import LoginForm
from "../components/forms/LoginForm";

import Header
from "../components/common/Header";

import Footer
from "../components/common/Footer";

import Notification
from "../components/dashboard/Notification";

const Login = () => {

  return (
    <div className="page auth-page">

      <Header />

      <main className="auth-main">
        <Notification />

        <LoginForm />
      </main>

      <Footer />

    </div>
  );
};

export default Login;
