import "./Footer.css";

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer">
      <div className="footer__glow"></div>

      <div className="footer__top">
        <div className="footer__brand">
          <h1>
            Nova <span>Core</span>
          </h1>
          <p>
            Building bright, fast, futuristic web experiences with React.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h3>Explore</h3>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Projects</a>
          </div>

          <div className="footer__column">
            <h3>Connect</h3>
            <a href="/">Contact</a>
            <a href="/">GitHub</a>
            <a href="/">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Nova Core. All rights reserved.</p>
        <button className="footer__button" type="button" onClick={scrollToTop}>
          Back to top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
