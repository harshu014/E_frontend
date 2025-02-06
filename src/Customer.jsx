import React from "react";
import './Customer.css'
import img1 from './assets/image-1.png'
import img3 from './assets/image-3.svg'
import img2 from './assets/image-2.svg'
import img4 from './assets/image-4.svg'
import Footer from "./components/Footer";
// import Accordian from "./components/Accordian_contact";
// import ContactForm from "./components/ContactForm";


function Customer(){
    return(
    <>
    {/* hero section start from here */}
    <section className="customer_hero">
        <div className="content">
        <p>Everything EatoPae Offers to Enhance Your Customer’s Dining Experience</p>
        <span>Explore what your customers would experience with EatOPae</span>
        <p id='Butn2'>Experience EatOPae</p>
        </div>
            <div className="shadow">
            
            </div>
    </section> 

   {/* customer content-page start from here */}
     <section className="customer_page"> 
        <div className="page-content-box">
            <div className="content-img">
                <center>
                <img src={img1} alt="" />
                </center>
            </div>
            <div className="page-content">
                <h3>Order Easy and Fast in just a click!</h3>
                <p>Every table is equipped with a tablet, allowing customers to browse the menu, customize their dishes, and place orders instantly. No more waiting for a waiter—just a click, and your order is on its way!</p>
            </div>
        </div>
        <div className="page-content-box">
             <div className="page-content">
                <h3>Customize Your Menu</h3>
                 <p>Customize your meals with detailed preferences, such as adjusting spiciness, salt levels, or opting for vegetarian or Jain-friendly options.
                 </p>
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
                <h3>Feedback and Support</h3>
                <p>Easily share your dining experience through detailed feedback and ratings. Receive prompt assistance for any questions or concerns through our dedicated support system.</p>
            </div>
        </div>
        <div className="page-content-box">
        <div className="page-content">
                <h3>Flexible Payment Options</h3>
               <p>Choose from a variety of secure payment methods, including cash, UPI, and cards</p>
            </div>
            <div className="content-img">
                <center>
                <img src={img4} alt="" />
                </center>
            </div>
        </div>

    </section>
    
     {/* <ContactForm/> */}
    {/* <Accordian/> */}
    <Footer/>

 
    </>
    )
}
export default Customer;