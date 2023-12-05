import React from "react";
import { Link } from "react-router-dom";
// import "../../Styles/AdminCSS/css/style.css";
// import $ from "jquery";
// import Photogenerator from "./Photogenerator";

const Adminnavbar = () => {
  return (
    <>
      <header>
          <nav
            className="navbar  navbar-expand-lg navbar-light top-navbar bg-dark fixed-top"
            data-toggle="sticky-onscroll"
          >
            <div className="container">
              <img
                src="assest/img/Group.png"
                className="img-fluid"
                alt="ResponsiveImage"
                style={{ maxWidth: 150 }}
              />
              <button
                style={{ color: "white" }}
                className="navbar-toggler bg-white"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ paddingLeft: "15%" }}
              >
                <ul className="navbar-nav pull-right">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/"
                      style={{ color: "white" }}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/work"
                      style={{ color: "white" }}
                    >
                    Photo Generator
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/reviews"
                      style={{ color: "white" }}
                    >
                      My Collection
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/pricing"
                      style={{ color: "white" }}
                    >
                      Train Model
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/Pakage"
                      style={{ color: "white" }}
                    >
                      Package
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#"
                      style={{ color: "white" }}
                    >
                      Users
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/Admin"
                      style={{ color: "white" }}
                    >
                      Settings
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/Admin"
                      style={{ color: "white" }}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
    </>
  );
};

export default Adminnavbar;
