import React from 'react'
// import HomeHistoryPlaylistIcons from './HomeHistoryPlaylistIcons'
import SearchForm from './SearchForm'
// import UserLoginIcon from './UserLoginIcon'
// import { GoThreeBars } from 'react-icons/go'
import { Link } from 'react-router-dom'
import './Nav.css'


// This is the search form. It conatins both the input box and the search icon
const Nav = ({
  searchedString,
  handleSubmit,
  handleChange,
  forwardedRef,
  userData,
  getUserData,
}) => {
  // console.log(forwardedRef)
  const user = userData.user;


  return (
    <nav className="navBar">
     <nav className="left-nav">
     <Link to="/">
          <i className="ri-home-4-line"></i>
      </Link></nav>

      <SearchForm
        searchedString={searchedString}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <nav className="right-nav">
      <Link to='/login'>
        <p className='register'>Login</p>
      </Link>

        <i className="ri-menu-fill"></i>
      </nav>
    </nav>

    // <div className="nav-container">
    //   <HomeHistoryPlaylistIcons />
    //   <SearchForm
    //     searchedString={searchedString}
    //     handleChange={handleChange}
    //     handleSubmit={handleSubmit}
    //   />
    //   <UserLoginIcon forwardedRef={forwardedRef} userData={userData} />
    //   <GoThreeBars className="text-lg md:text-3xl hamburger" />
    // </div>
  )
}

export default Nav
