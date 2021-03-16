import React from "react";
import './header.scss'

const Header = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" href="#" role="button">
            <i className="fas fa-bars" style={{color: 'white'}} />
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link" style={{color: 'white'}}>
            Home
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a href="#" className="nav-link" style={{color: 'white'}}>
            Contact
          </a>
        </li>
      </ul>
      {/* SEARCH FORM */}
      <form className="form-inline ml-3">
        <div className="input-group input-group-sm">
          <input
            className="form-control form-control-navbar"
            type="search"
            placeholder="Search"
            aria-label="Search" style={{color: '#152C5B'}}
          />
          <div className="input-group-append">
            <button className="btn btn-navbar" type="submit">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
     
    </nav>
  );
};

export default Header;
