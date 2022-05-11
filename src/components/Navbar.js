import React from 'react'
import './style.css'
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div> <header>
    <nav className="nav-wrapper blue-grey darken-4">
      <div className="container">
        <a href="/" className="brand-logo left hide-on-med-and-down">
          MARY.AI 
        </a>
        <a href="/" className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            
            <a href="/list">Companies</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
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