import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/work"
                      style={{ color: "white" }}
                    >
                      How it Works
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/reviews"
                      style={{ color: "white" }}
                    >
                      Reviews
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/pricing"
                      style={{ color: "white" }}
                    >
                      Pricing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#"
                      style={{ color: "white" }}
                    >
                      Faq's
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#"
                      style={{ color: "white" }}
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/Admin"
                      style={{ color: "white" }}
                    >
                      Admin
                    </Link>
                  </li>
                  <li className="nav-item" style={{ paddingLeft: 65 }}>
                    <a className="btn" href="#">
                      <b style={{ color: "white" }}>LOG IN</b>
                    </a>
                  </li>
                  <li className="nav-item" style={{ paddingLeft: 40 }}>
                  <button type="button" class="btn btn-outline-warning mybutton">GET STARTED</button>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
        </header>
    </>
  );
};

export default Header;
