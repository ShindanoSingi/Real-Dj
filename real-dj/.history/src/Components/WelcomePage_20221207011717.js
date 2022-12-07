import React from 'react'
import '../Images/HomePage.png'
import { Link } from 'react-router-dom'
import './WelcomePage.css'

const WelcomePage = () => {
  return (
    <div className="container">
      <div className="top-text">
        <p className="text-top">Real-Dj</p>
        <p className="text-bottom">
          Click on "Go" button.
        </p>
      </div>
      
      <img
        className="logo"
        src={require('../Images/HomePage.png')}
        alt="Home Page mage"
      />

      <button className="go-button">
        <Link to="/videoPlayer/:id">Go</Link>
      </button>
    </div>
  )
}

export default WelcomePage
