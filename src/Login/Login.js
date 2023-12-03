import React from 'react';
import './Login.css';
import url from './cyber-monday-shopping-sales.jpg'
import { useState } from 'react';

const Login = () => {
  const[username,SetUsername]=useState('');
  const[password,SetPassword]=useState('');
  const[saved_info,all_info]=useState([]);
  const Login_user =()=>{
      all_info([...saved_info,{username,password}]);
      SetUsername('');
      SetPassword('');
  }
  return (
    <div className='login_container'>
      <div className='login_wrapper'>
        <div className='login_form'>
          <form>
            <h2>Login To Your Account</h2>
            <input type="text" id="username" name="username" placeholder='Username'value={username} onChange={(event)=>SetUsername(event.target.value)}required/><br/><br/>
            <input type="password" id="password" name="password"onChange={(event)=>SetPassword(event.target.value)} placeholder='Password'value={password}required/><br/><br/>
            <input type="submit" value="Login Now" className='submit_form'onClick={Login_user}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login