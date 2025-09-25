import { useState } from "react";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light w-100">
        <div className="container px-3">
          {/* Brand */}
          <a
            className="navbar-brand font-extrabold !text-[20px]"
            href="./index.html"
          >
            MicroAgent
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler offcanvas-nav-btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNav"
            aria-controls="offcanvasNav"
          >
            <i className="bi bi-list"></i>
          </button>

          {/* Offcanvas */}
          <div
            className="offcanvas offcanvas-start offcanvas-nav"
            tabIndex="-1"
            id="offcanvasNav"
            aria-labelledby="offcanvasNavLabel"
            style={{ width: "20rem" }}
          >
            <div className="offcanvas-header">
              <a
                className="navbar-brand font-extrabold !text-[20px]"
                href="./index.html"
              >
                MicroAgent
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
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
                  <a className="dropdown-item" href="./#pricing">
                    Contact Us
                  </a>
                </li>
              </ul>

              <div className="mt-3 mt-lg-0 d-flex align-items-center">
                <a href="./#pricing" className="btn btn-primary">
                  Get Started
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
