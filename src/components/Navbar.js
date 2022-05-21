import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div> <header>
    <nav className="nav-wrapper white lighter-1">
      <div className="container">
        <a href="/" className="brand-logo left hide-on-med-and-down indigo-text ">
          MARY.AI 
        </a>
        <Link to="/" className="sidenav-trigger " data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </Link>
        <ul className="right hide-on-med-and-down">
          <li>
            
          <Link to='/list' className='black-text'>Companies</Link>
          </li>
          <li>
          <Link to="/charts" class="black-text">Visualizations</Link>
          </li>
          <li>
            <a href="#" class="black-text">Contact</a>
          </li>
          <li>
            <a
              href="#"
              className="tooltipped btn-floating btn-small indigo darken-4"
              data-position="bottom"
              data-tooltip="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tooltipped btn-floating btn-small indigo darken-4"
              data-position="bottom"
              data-tooltip="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="tooltipped btn-floating btn-small indigo darken-4"
              data-position="bottom"
              data-tooltip="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
        <ul className="sidenav grey lighten-2" id="mobile-menu">
          <h2>MARY.AI</h2>
          <li>
            <a href="#">Photo's</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </header></div>
  )
}

export default Navbar