import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    
    <div className='nav'>
      <div className='navTitle'>Resume <span>Builder</span></div>
      <div className='navLink'>
        <span><Link className='link' to='/'>Home</Link></span>
        <span><Link className='link' to='/login'>Login</Link></span>
        <span><Link className='link' to='/register'>Register</Link></span>
        <span><Link className='link' to='/resume'>Resume</Link></span>

      </div>  
    </div>
  )
}

export default Header