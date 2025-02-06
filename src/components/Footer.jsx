import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
const Footer = () => {
  return (
    <footer>
      <center>
        <div className='container'>
          
            <div id='flex-30'>
            <center>
              <img src='logo-footer.png' id='footer-logo'/>  
              <p style={{textAlign:"center"}}>Order Easy, Eat Happy</p>
              <div className='container12'>
                <div className='back'>
              <FaInstagram  className='fa'/>
              </div>
              <div className='back'>
              <FaLinkedinIn className='fa'/>
              </div>
              
              </div>
              </center> 
            </div>
            <div className='container-flex'><p className='headnng'>CONTACT</p>
            {/* <div className='container-s'><IoMdCall className='ico'/> <h4 className='bod'>+91 9555855303 <br/> +91 6393887230</h4> </div>
            <div className='container-s'><IoMdMail className='ico'/> <h4 className='bod'>fluxvisiodynamics@gmail.com</h4> </div>
            <div className='container-s'><MdLocationPin className='ico'/> <h4 id='addres'>82/22, Gandhi Gram, Ramadevi,<br/> Kanpur, Uttar Pradesh</h4>  </div> */}
             <ul>
              <li>9555855303,6393887230</li>
              <li>fluxvisiodynamics@gmail.com</li>
              <li>82/22, Gandhi Gram, Ramadevi, Kanpur, Uttar Pradesh</li>
            </ul>
            </div>
            <div className='container-flex'><p className='headnng'>PRODUCTS</p>
            <ul>
              <li>Homepage</li>
              <li>For Customers</li>
              <li>For Merchants</li>
            </ul>
            </div>
            <div className='container-flex'><p className='headnng'>COMPANY</p>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Terms & Conditions</li>
            </ul></div>
        </div>
        </center>
    </footer>
  )
}

export default Footer;
