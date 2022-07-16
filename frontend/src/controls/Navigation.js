import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">React App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" >Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/features">Features</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle btn btn-link" type="button" id="adminDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Admin
              </button>
              <ul className="dropdown-menu" aria-labelledby="adminDropdown">
                <li><NavLink className="dropdown-item" to="/admin/users">Users</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/login" ><i className="fa fa-user"></i></NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;