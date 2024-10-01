import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Image Encrypter</h1>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/encode">Encode</Link></li>
          <li><Link to="/decode">Decode</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
