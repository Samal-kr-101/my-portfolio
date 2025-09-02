import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div id="footer" className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src='' alt=''/> */}
                <p>I'm a frontend developer from India.I am a fresher and seeking for internship and job opportunities.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    {/* <img src='' alt=''/> */}
                    <input placeholder='Enter your email' type='email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr/>
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Samal Kumar.All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer