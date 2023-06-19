import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/media/logo.svg";
const Navbar = () => {
  return (
    <>
      <div className="contact_minibar nav_man">
        <div className="row m-0 g-0 justify-content-between">
          <div className="col-auto">
            <ul className="nav">
              <li className="nav-item">
                <a
                  to="https://wa.me/+917777009971"
                  rel="noreferrer"
                  className="nav-link"
                  target="_blank"
                >
                  <i className="fa-brands fa-whatsapp link-icon-left"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  to="tel:+917777009971"
                  className="nav-link"
                  rel="noreferrer"
                  target="_blank"
                >
                  <i className="fa-solid fa-phone link-icon-left"></i>
                  <span className="d-none d-md-inline">+917777009971</span>
                </a>
              </li>
              <li className="nav-item d-none d-md-inline">
                <a
                  to="mailto:connect@iriquehitech.com"
                  rel="noreferrer"
                  className="nav-link"
                  target="_blank"
                >
                  <i className="fa-solid fa-envelope link-icon-left"></i>
                  <span className="d-none d-md-inline">
                    connect@iriquehitech.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <ul className="nav">
              <li className="nav-item">
                <a
                  to="https://iriquehitech.com/put-enquiry"
                  className="nav-link"
                >
                  <i className="fa-solid fa-envelope link-icon-left"></i>Request
                  a Free Demo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg  ">
        <div className="container">
          <Link className="navbar-brand" to="#">
            <img src={logo} height="80" alt="" />
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About&nbsp;Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Products
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/products/all">
                      <i className="fa-solid fa-caret-right link-icon-left"></i>
                      Payroll Outsourcing
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" to="/products/hrms">
                      <i className="fa-solid fa-caret-right link-icon-left"></i>
                      Human Resource Management Software
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="fa-solid fa-caret-right link-icon-left"></i>
                      HRMS on Cloud (SAAS)
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/products/pms">
                      <i className="fa-solid fa-caret-right link-icon-left"></i>
                      Payroll Management Software
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      <i className="fa-solid fa-caret-right link-icon-left"></i>
                      Product 1
                    </Link>
                  </li>
                  {/* <li><hr className="dropdown-divider"></li> */}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#">
                  Downloads
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="#">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item enquiry">
                <Link className="nav-link btn btn-theme-brand" to="#">
                  <i className="fa-solid fa-envelope link-icon-left"></i>Place
                  an Enquiry
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
