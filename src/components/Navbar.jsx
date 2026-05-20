import { useTheme } from "next-themes";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top shadow-sm">
      <div className="container py-2">
        <Link className="navbar-brand fw-semibold" to="/">
          NASA Space Lab
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
            <button
              type="button"
              className="btn btn-outline-primary ms-lg-3"
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {isDark ? "Light mode" : "Dark mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
