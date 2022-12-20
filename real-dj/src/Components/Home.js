import React from 'react'
import './Home.css'


function Home(userDetails)  {

  const user = userDetails.user;

  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  }

  return (
    <div className='home-container'>
    <h1>Home</h1>
      <div className='form-container'>
          <h2>Profile</h2>
          <input type='text' className='input' placeholder='Username'/>
          <input type='text' className='input' placeholder='Email'/>
          <button className='logout-button' onClick={logout}>Log Out</button>
      </div>
    </div>
  )
}

{/* <input type='text' defaultValue={user.name} className='input' placeholder='Username'/>
<input type='text' defaultValue={user.email} className='input' placeholder='Email'/> */}

export default Home


