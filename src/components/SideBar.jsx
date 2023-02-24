import { Button, Col, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookOpen, FaHome } from "react-icons/fa";

export const SideBar = () => {
  return (
    <>
      <Col xs={2}>
        <Navbar className="navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between" id="sidebar">
          <div className="nav-container">
            <Link className="navbar-brand" to="/">
              <img src="Spotify_Logo.png" alt="Spotify_Logo" width="131" height="40" />
            </Link>
            <Button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <Link className="nav-item nav-link" href="/">
                      <FaHome />
                      &nbsp; Home
                    </Link>
                  </li>
                  <li>
                    <a className="nav-item nav-link" href="#">
                      <FaBookOpen />
                      &nbsp; Your Library
                    </a>
                  </li>
                  <li>
                    <div className="input-group mt-3">
                      <input
                        type="text"
                        className="form-control mb-2"
                        id="searchField"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append" style={{ marginBottom: "4%" }}>
                        <Button className="btn btn-outline-secondary btn-sm btn-dark" type="button" id="button-addon1">
                          GO
                        </Button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="nav-btn">
            <Button className="signup-btn" type="button">
              Sign Up
            </Button>
            <Button className="login-btn" type="button">
              Login
            </Button>
            <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
          </div>
        </Navbar>
      </Col>
    </>
  );
};
