import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext';  // Import useTheme hook

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { mode, toggleMode, themeChange } = useTheme();  // Access theme and functions

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode === "light" ? "light" : "dark"} bg-${mode === "light" ? "light" : "dark"}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Textutils
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggleNav}
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
          </ul>

          <div className="theme">
            <button className="btn btn-danger mx-2" onClick={() => themeChange("red")}>Red</button>
            <button className="btn btn-success mx-2" onClick={() => themeChange("green")}>Green</button>
          </div>

          <div className={`form-check form-switch text-${mode === "light" ? "dark" : "light"}`}>
            <button className={`btn ${mode === "light" ? "btn-dark" : "btn-light"}`} onClick={toggleMode}>
              {mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;