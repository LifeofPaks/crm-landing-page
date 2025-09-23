import { useState } from "react";

const Header = () => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  const closeOffcanvas = () => {
    setIsOffcanvasOpen(false);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light w-100">
        <div className="container px-3">
          <a className="navbar-brand" href="./index.html">
            <img
              src="./src//assets/images/logo/microagentailogo.svg"
              className="w-[200px]"
              alt=""
            />
          </a>
          {/* <button
            className="navbar-toggler offcanvas-nav-btn"
            type="button"
            onClick={toggleOffcanvas}
          >
            <i className="bi bi-list"></i>
          </button> */}
          <div
            className={`offcanvas offcanvas-start offcanvas-nav ${
              isOffcanvasOpen ? "show" : ""
            }`}
            style={{ width: "20rem" }}
          >
            <div className="offcanvas-header">
              <a href="./index.html" className="text-inverse">
                <img
                  src="./assets/images/logo/microagentailogo.svg"
                  height="20"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="btn-close"
                onClick={closeOffcanvas}
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body pt-0 align-items-center">
              <ul className="navbar-nav mx-auto align-items-lg-center">
                <li>
                  <a className="dropdown-item" href="./index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./#product">
                    Our AI Products
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./#work">
                    How it Works
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./#pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="./#demo">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="mt-3 mt-lg-0 d-flex align-items-center">
                <a href="./#demo" className="btn btn-primary">
                  Request a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
