import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <>
    <div style={{margin:"1rem 2rem",backgroundColor:"skyblue", color:'white', textAlign:"center",padding:'1rem'}}>
      <h2>Singam Sai's Directory App</h2>
    </div>
    <div className='appButtons'>
        <Link to="/">
        <button>Add New Person</button>
         </Link>
         <Link to="/retrieve">
        <button>Retrieve information</button>
        </Link>
      </div>
    </>
  )
}

export default Nav
