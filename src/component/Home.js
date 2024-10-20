// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
<img src = "C:\Users\tanya\Downloads\key.jpg.jpg" width="200" height="180" align= left>
      
<div className='text'>
      <h2><p>Choose the option you want to perform:</p> </h2>
<div class="container">
  
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
