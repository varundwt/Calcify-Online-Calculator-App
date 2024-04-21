import React from 'react'
import './Footer.css'
import footer_favicon from "../../assets/Calcify-Favicon.png"

const Footer = () => {
  const date = new Date();
  const year = (date.getFullYear());

  return (
    <div className='footer'>Copyright ©️ {year} <img className='footer_favicon' src={footer_favicon}/> Varun Pandey</div>
  )
}

export default Footer