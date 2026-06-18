const Footer = () => {

  const currentYear =
    new Date().getFullYear();

  return (
    <footer className="site-footer">

      <p>
        DevSync
        {" "}
        {currentYear}
      </p>

      <span>
        Built for focused team workflows.
      </span>

    </footer>
  );
};

export default Footer;
