// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='text'>
      <h2>Welcome to Your Image Encrypter Website</h2>
      <p>Choose the option you want to perform:</p>
      <nav>
        <ul>
          <li><Link to="/encode" className='a3'>Encode</Link></li>
          <li><Link to="/decode" className='a3'>Decode</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;