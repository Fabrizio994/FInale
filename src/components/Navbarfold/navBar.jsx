import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo-planet-image.png";
import "./navbar.css";
export default function Navbar() {
  const location = useLocation();
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid ms-5">
        <Link className="navbar-brand" to="/">
          <img className="navImg ms-1" src={logo} alt="World Map" />
        </Link>
        <button
          className="navbar-toggler me-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav mx-auto">
            <Link
              to="/co2"
              className={`nav-link ${
                location.pathname === "/co2" ? "active" : ""
              }`}
            >
              CO2
            </Link>
            <Link
              to="/ice"
              className={`nav-link ${
                location.pathname === "/ice" ? "active" : ""
              }`}
            >
              Ghiaccio Polare
            </Link>
            <Link
              to="/methane"
              className={`nav-link ${
                location.pathname === "/methane" ? "active" : ""
              }`}
            >
              Metano
            </Link>
            <Link
              to="/no2"
              className={`nav-link ${
                location.pathname === "/no2" ? "active" : ""
              }`}
            >
              NO2
            </Link>
            <Link
              to="/temperature"
              className={`nav-link ${
                location.pathname === "/temperature" ? "active" : ""
              }`}
            >
              Temperatura
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
