import React from 'react';

export function AppNavbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container">
        <span className="navbar-brand">Kingdom</span>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <span className="nav-link">CoolTime</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
