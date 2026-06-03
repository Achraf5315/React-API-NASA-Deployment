import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="site-nav" aria-label="Hoofdnavigatie">
      <div className="site-nav__inner">
        <span className="site-wordmark" aria-label="NASA">
          NASA
        </span>
        <div className="site-nav__links">
          <Link className="site-nav__link" to="/">
            Home
          </Link>
          <Link className="site-nav__link" to="/overview">
            Overzicht
          </Link>
          <Link className="site-nav__link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
