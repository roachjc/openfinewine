import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand"><img className="wineglass" alt="Brand" src="http://www.thewinesociety.com/images/glyph-glass.svg" /></a>
          <ul className="nav navbar-nav">
            <li><Link to="/">Show All Wines and Details</Link></li>
            <li><Link to="/wines">Show Wines</Link></li>
            <li><Link to="/vintages">Show Vintages</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
