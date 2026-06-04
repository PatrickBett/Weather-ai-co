import { NavLink } from "react-router-dom";
import SearchBar from "../common/SearchBar";

export default function Navbar({ onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      {/* Brand */}
      <NavLink className="navbar-brand" to="/">
        WeatherApp
      </NavLink>

      {/* Toggle button (mobile) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible content */}
      <div className="collapse navbar-collapse" id="navbarContent">
        {/* Left nav links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-lg-center">
          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/">
              Today
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/hourly">
              Hourly
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link text-white" to="/forecast">
              7-Day
            </NavLink>
          </li>
        </ul>

        {/* Search bar (right side on desktop, stacked on mobile) */}
        <div className="d-flex">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
}
