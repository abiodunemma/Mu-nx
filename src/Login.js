import React from 'react'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './css/Login.css';


const Login = () => {
  return (
    <div class="login-container">
        <div className='logo'>
       <h2>Login</h2>
       </div>
       <form>
       <div class="login">
          <label for="username">Username</label>
          <textarea type="text" placeholder='input email address' id="username" name="username" required/>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <textarea type="password"  placeholder='input your password ' id="password" name="password" required/>
        </div>
        <div className='forgot'>
    <h5>Forgot Password?</h5>
</div>
        <button type="submit" className='login-btn' class="login-btn">Login</button>

   </form>
   <div>
   <button type="submit" className='' class="login-btn">Continue with Google</button>
     <button type="submit" className='' class="login-btn">Continue with Facebook</button>
     <button type="submit" className='' class="login-btn">Continue with Apple</button>
     </div>
      
  </div>
        
  )
}

export default Login