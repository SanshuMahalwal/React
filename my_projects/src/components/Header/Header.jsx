import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className="container-fluid fixed-top bg-secondary">
      <div className="row">
        <div className="col-md-10 col-12 mx-auto">
          <nav className="navbar navbar-expand-lg p-2 text-white">
              <div className="navbar-brand px-2">My Projects</div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item mx-3">
                    <NavLink to='/' className={({isActive}) => `nav-link ${isActive ? "text-warning" : ""}`} aria-current="page">Home</NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink to='/projects' className={({isActive}) => `nav-link ${isActive ? "text-warning" : ""}`}>Projects</NavLink>
                  </li>
                </ul>
              </div>
          </nav>
        </div>
      </div>
    </div>
    
  )
}

export default Header