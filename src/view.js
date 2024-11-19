import React from 'react';
import New from './assets/New.jpg';
import './css/View.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



const App = () => {
  return ( 
  <div className='background-container'>
  <div className='overlay'>
<h1>
Find inspiration. Get 
<div className='move'>tattooed.</div> 
<div>Book today.</div>
</h1>
</div>
<Link to="/Login">
<button className="centered-button">Get Started</button>
</Link>
</div>
    
  );
}

export default App;