import React from 'react';

export function AppNavbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand">Kingdom</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">CoolTime</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
