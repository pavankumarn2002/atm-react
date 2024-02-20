import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Login/auth";
const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/">Props</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/handling">Event Handler</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/stateHook">Use State</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/form">Simple Form</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/useEffect">Use Effect</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/useContext">Use Context</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/useReducer">Use Reducer</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/customHook">Custom Hook</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/userData">Dynamic Routing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/nestedRouting">Nested Routing</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/atmProject">ATM Project</NavLink>
              </li>
              <li className="nav-item">
                {user ? (
                  <NavLink to="/logout" onClick={logout}>
                    Logout
                  </NavLink>
                ) : (
                  <NavLink to="/login">Login</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="userProfile">
            <p>{user}</p>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
