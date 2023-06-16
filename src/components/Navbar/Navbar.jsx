import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="contact_minibar">
        <div className="row m-0 g-0 justify-content-between">
          <div className="col-auto">
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="nav-link" target="_blank">
                  <i className="fa-brands fa-whatsapp link-icon-left"></i>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link" target="_blank">
                  <i className="fa-solid fa-phone link-icon-left"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <ul className="nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fa-solid fa-envelope link-icon-left"></i>Request
                  a Free Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            {/* <img src="/src/assets/react.svg" height="80" alt="" /> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About&nbsp;Us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Products
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/products/all">
                      <i className="fa-solid fa-caret-right link-icon-left"></i>
                      Payroll Outsourcing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/products/hrms">
                      <i className="fa-solid fa-caret-right link-icon-left"></i>
                      Human Resource Management Software
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-caret-right link-icon-left"></i>
                      HRMS on Cloud (SAAS)
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/products/pms">
                      <i className="fa-solid fa-caret-right link-icon-left"></i>
                      Payroll Management Software
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="fa-solid fa-caret-right link-icon-left"></i>
                      Product 1
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider"></li> */}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Downloads
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item enquiry">
                <a className="nav-link btn btn-theme-brand" href="#">
                  <i className="fa-solid fa-envelope link-icon-left"></i>Place
                  an Enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
