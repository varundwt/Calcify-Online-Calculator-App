import React from 'react'
import './Header.css'
import header_logo from "../../assets/calcify_header.png"


const Header = () => {
  return (
    <div className='header'>        
        <img src={header_logo} alt="header" />
    </div>
  )
}

export default Header