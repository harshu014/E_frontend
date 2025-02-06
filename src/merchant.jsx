import React from "react";
import './merchant.css'
import arrow from './assets/Vector.svg'
import innerHero from './assets/inner-hero.png'
import img1 from './assets/img-1.svg'
import img2 from './assets/img-2.svg'
import img3 from './assets/img-3.svg'
import img4 from './assets/img-4.svg'
import Accordian_contact from "./components/Accordian_contact";
import { Margin } from "@mui/icons-material";
import Marquee from 'react-fast-marquee';
import Footer from "./components/Footer";
import { HashLink } from 'react-router-hash-link';
function Merchant(){
    return(
        <>
           {/* hero section start from here */}
       <section className="merchant-hero">
         <div className="hero-content">
           <div className="text-content">
            <h3>Transform Your Restaurant Operations with EatOPae</h3>
            <p>Streamline orders, track analytics, and enhance customer satisfaction—all from one intuitive platform.</p>
            <br />
            <div style={{display:"flex"}}>
            <a href="#section1">Schedule a Demo<img src={arrow} alt="" /></a>
            <a href="#" style={{marginLeft:"20px"}}>Experience EatOPae<img src={arrow} alt="" /></a>
             </div>
           </div>
           <div className="content-img">
            <img src={innerHero} alt="" />
           </div>
         </div>
       </section>

           {/* merchant-page with vector andcontent start from here */}
       <section className="merchant-page">
           <center>
             <a>Features</a>
           </center>
                <div className="page-content-box">
                    <div className="content-img">
                        <center>
                        <img src={img1} alt="" />
                        </center>
                    </div>
                    <div className="page-content">
                        <h3>Order Management</h3>
                        <p>Track all your orders in one place—dine-in, Swiggy, Zomato, and more.</p>
                    </div>
                </div>
                <div className="page-content-box">
                     <div className="page-content">
                        <h3>Real-Time Analytics</h3>
                        <p>Access insights on sales, top-selling dishes, and peak hours to make data-driven decisions.</p>
                    </div>
                    <div className="content-img">
                        <center>
                        <img src={img2} alt="" />
                        </center>
                    </div>
                </div>
                <div className="page-content-box">
                <div className="content-img">
                    <center>
                    <img src={img3} alt="" />
                    </center>
                    </div>
                    <div className="page-content">
                        <h3>Seamless POS Integration</h3>
                        <p>Simplify billing and payment processes with EatOPae seamless POS to merchant integration.</p>
                    </div>
                </div>
                <div className="page-content-box">
                <div className="page-content">
                        <h3>Centralized control of orders and payments.</h3>
                         <p>Making managing orders and their payment updated and streamlined</p>
                    </div>
                    <div className="content-img">
                        <center>
                        <img src={img4} alt="" />
                        </center>
                    </div>
                </div>
       </section>
        
          {/* merchant-page with buttons start from here */}
          <section className="buttons-scroll">
            <div className="scroll-row-1">
            <p>Reduced errors</p>
            <p>faster table turnover</p>
            <p>Enhanced customer experience</p>
            </div>
            <div className="scroll-row-2">
            <p>Increased efficiency</p>
            <p>Easy to understand</p>
            <p>User Friendly Interface</p>
            </div>
          </section>
         
         <section className="accordian_contact">
        <div id='section1'><Accordian_contact/></div> 
         </section>

         <Footer/>
        </>
    )
}
export default Merchant;
