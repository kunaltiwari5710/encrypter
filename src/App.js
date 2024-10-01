import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Encode from './component/Encoder';
import Decode from './component/Decoder';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/login';

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route className='btn' path="/encode" element={<Encode />} />
          <Route className='btn' path="/decode" element={<Decode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
