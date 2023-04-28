import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  let Navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          iNoteBook
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link
                className="btn btn-primary mx-2"
                role="button"
                to="/login"
              >
                Login
              </Link>
              <Link
                className="btn btn-primary mx-2"
                role="button"
                to="/signup"
              >
                Signup
              </Link>
            </form>
          ) : (
            <Link onClick={handleLogout} className="btn btn-primary mx-2" role="button" to="/login">
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
