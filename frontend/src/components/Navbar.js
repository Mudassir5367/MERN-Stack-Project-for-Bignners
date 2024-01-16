import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className ="navbar navbar-expand-lg navbar-light bg-light">
  <div className ="container-fluid" style={{color:'gold'}}>
    <Link className ="navbar-brand" to="/">Navbar</Link>
    <button className ="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className ="navbar-toggler-icon"></span>
    </button>
    <div className ="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className ="navbar-nav ms-auto mb-2 mb-lg-1 fs-5">
        <li className ="nav-item">
          <Link className ="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link" to="/about">About Us</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link" to="/login">Login</Link>
        </li>
        <li className ="nav-item">
          <Link className ="nav-link" to="/signup">Registration</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar