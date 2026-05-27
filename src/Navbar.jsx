// Navbar.jsx
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="logo-glow">⚡</span> Nova
      </div>

      <ul className="navbar__links">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Projects</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      <button className="navbar__button">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;