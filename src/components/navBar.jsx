import { Link } from "react-router-dom";
import logo from "../assets/logo-planet-image.png";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="navImg ms-1" src={logo} alt="World Map" />
        </Link>
        <button
          className="navbar-toggler"
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
            <Link to="/co2" className="nav-link active">
              Co2
            </Link>
            <Link to="/ice" className="nav-link active">
              PolarIce
            </Link>
            <Link to="/methane" className="nav-link active">
              Methane
            </Link>
            <Link to="/no2" className="nav-link active">
              No2
            </Link>
            <Link to="/temperature" className="nav-link active">
              Temperatura
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
