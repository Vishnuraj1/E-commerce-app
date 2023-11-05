import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook,faInstagram,faXTwitter} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <div className="icons">
                <div className="facebook">
                <FontAwesomeIcon icon={faFacebook}  size='xl'/>
                </div>
                <div className="instagram">
                <FontAwesomeIcon icon={faInstagram} size='xl' />
                </div>
                <div className="twitter">
                <FontAwesomeIcon icon={faXTwitter} size='xl' />
                </div>
                
            </div>
            <div className="copyRights">
                <p>Copyrights @ecommerce 2023</p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
