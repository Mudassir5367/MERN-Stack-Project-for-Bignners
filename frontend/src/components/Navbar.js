import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='Navbar'>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand text-warning" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-1 fs-5">
                <li className="nav-item">
                  <Link className="nav-link text-warning active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-warning" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-warning" to="/contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-warning" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-warning" to="/signup">Registration</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
