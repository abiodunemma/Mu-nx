import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className='background-container'>   
<div className='main'>

<h2 >Create your Free Account</h2>
<form>
  <div className='form'>
    <div className='name'>
  <label>
  
    Full Name
  </label>
  </div>
  <input placeholder='Enter your Full Name  here' id="full name"  className='input'>
  </input>
  </div>
  <div className='form1'>
    <div className='email'>
  <label >
    Email
  </label>
  </div>
  <input placeholder='Enter your  Email Name  here' id="email" className='input'>
  </input>
  </div>
  <div className='form2'>
    <div className='password'>
  <label>
    Password
  </label>
  </div>
  <input placeholder='Enter your  Password Name  here' id="password" className='input'>
  </input>
  </div>
</form>
<button className='button'> Create Account</button>
<div className='botom'>
  <h4>
    Already have a acoount? <span className='span'>Login</span>
  </h4>
</div>
<div className='or'>
  <h2> - OR -</h2>
</div>
<div className='button1'>
  <button className='button2'>sign up with Google</button> <span><button className='button4 '>sign up with Github</button></span>
</div>
<div className='footer'>
  <h2>Adeyemi| php Laravel dev | react & react native dev</h2>
</div>
</div>
</div>

  );
}

export default App;
