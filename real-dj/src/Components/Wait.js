import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import './Wait.css'

const Wait = () => {
  return (
    <div className='busy-container'>
	<div className="busy">
	  <h1>Please wait...</h1>
	  <CircularProgress disableShrink />
	</div>
    </div>
  )
}

export default Wait
