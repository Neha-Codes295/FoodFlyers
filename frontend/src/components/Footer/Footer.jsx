import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis cumque quis dolorum nulla sequi nemo exercitationem, magni voluptatem molestias! Laboriosam?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2> 
           <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-355-494-2489</li>
                <li>contact@FoodFlyers.com</li>
            </ul>
        </div>
      </div>
    <hr />

    <p className="footer-copyright">Copright 2024 &copy; FoodFlyers.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
