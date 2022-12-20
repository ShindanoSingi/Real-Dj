import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import google from '../Images/google.svg'


const Signup = () => {
  const googleAuth = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/google/callback`, "_self");
  }
  return (
    <div className='signup-container'>
    <h1>Signup Form</h1>
      <div className='form-container'>
          <h2>Create Account</h2>
          <input type='text' className='input' placeholder='Username'/>
          <input type='text' className='input' placeholder='Email'/>
          <input type='password' className='input' placeholder='Password'/>
          <button className='signup-button'>Sign up</button>
          <p className='text'>or</p>
          <button className='google-button' onClick={googleAuth}>
            <img src={google} alt='google'/>
            <span>Sign up with Google</span>
          </button>
          <p className='text'>Already Sign up?
          <Link to='/login'>
            Log in
          </Link>
          </p>
        </div>
    </div>
  )
}

export default Signup
