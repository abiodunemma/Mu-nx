import React from 'react';
import vertical from './assets/vertical.png';
import './css/View.css';  
import './styles/View.css';

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {
  return (
<div className='app'>

    <div className="home">
<img src={vertical} alt='' >
</img>
      
     
     <div>
     <Link to="/view">Home</Link>
     </div>
   
    </div>
    </div>
  );
}

export default App;