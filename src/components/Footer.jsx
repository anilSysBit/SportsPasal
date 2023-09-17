import React from 'react'
import { LocationOn,Phone,Email } from '@mui/icons-material'
const Footer = () => {
  return (
    <div className="footer_container">
        <div className="size_manager">
            <div className="mission_content">
                <h2>Our Mission</h2>
              <p>
                At Sportspasal, our mission is to ignite your sporting passion. We provide top-quality gear, expert advice, and a welcoming community to support your journey in sports. Join us and pursue greatness! At Sportspal, our mission is to ignite your sporting passion. We provide top-quality gear, expert advice, and a welcoming community to support your journey in sports. Join us and pursue greatness! At Sportspal, our mission is to ignite your sporting passion. We provide top-quality gear, expert advice, and a welcoming community to support your journey in sports. Join us and pursue greatness!</p>  
            </div>
            <div className="quick_links">
                <h2>Quick Links</h2>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Blog </li>
                    <li>Product</li>
                    <li>Brand</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="f_contact_us">
                <h2>Contact Us</h2>
                <div className="head_office cu1">
                    <span><LocationOn className='footer_icon'/>    Admin Office</span>
                    <p>Khairahani-1,Chitwan</p>
                </div>
                <div className="phone_number cu1">
                    
                    <span><Phone className='footer_icon'/>    Phone Number</span>
                    <p>+977 9816284342</p>
                    <p>+977 9749848821</p>
                </div>
                <div className="email cu1">
                    <span><Email className='footer_icon'/>    Email</span>
                    <p>anil.wagle808@gmail.com</p>
                </div>
            </div>
        </div>
        <div className="copyright_message">
            <p>Copyright ©2023 All rights Reserved | Website Made By </p>
            <br />
            <span>Anil Wagle</span>
        </div>
    </div>
  )
}

export default Footer