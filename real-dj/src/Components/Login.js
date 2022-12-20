import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import google from '../Images/google.svg'


const Login = () => {
  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`, "_self");
  }
  return (
    <div className='login-container'>
    <h1>Login Form</h1>
      <div className='form-container'>
          <h2>Members Login</h2>
          <input type='text' className='input' placeholder='Email'/>
          <input type='text' className='input' placeholder='Password'/>
          <button className='login-button'>Login</button>
          <p className='text-or'>or</p>
          <button className='google-button' onClick={googleAuth}>
            <img src={google} />
            <span>Sign in with Google</span>
          </button>
          <p className='text'>New Here?
          <Link to='/signup'>
            Sign Up
          </Link>
          </p>
      </div>
    </div>
  )
}

export default Login
