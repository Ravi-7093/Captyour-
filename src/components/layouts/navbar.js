import React from 'react'
import logo from '../../logo.png'
import {Link} from 'react-router-dom'
function Navbar(){

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <Link className="navbar-brand ml-5" href="#">
    <img src={logo} alt='logo' style={{width:'125px'}}/>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span >
      <i className = 'fa fa-bars' style ={{ color:'#fff'}}></i>
      </span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto">
        <li className="nav-item active">
          <Link className="nav-link text-white text-uppercase ml-5" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase ml-5" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white text-uppercase ml-5" to="/contacts">Get in Touch</Link>
        </li>

      </ul>
      
    </div>
  </nav>
  )
}

export default Navbar;
