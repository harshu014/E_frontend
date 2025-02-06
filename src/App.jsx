import React from 'react';
import './App.css'
import { FaArrowRight } from "react-icons/fa";
import Footer from './components/Footer';
import Contact from './components/Contact';
import Marquee from 'react-fast-marquee';
import zomato from './assets/zomato.svg'
import swiggy from './assets/swiggy.svg'
import eatsure from './assets/eatsure.svg'
import pattern from './assets/pattern-cut.svg'
import Contact_form from './components/Contact_form';
import { HashLink } from 'react-router-hash-link';



const App = () => {
  return (
    <section style={{background:'rgba(28, 28, 28, 1)'}}>
    
      <div className='FA'>
        <div className='IO'>
          <h2>Reimagining dining with<br />
            <span>Intelligent Ordering</span></h2>
        </div>

        <div id='Str'>
          <h3>Streamline operations for merchants, delight customers with <br /> seamless dining experiences, and revolutionize how <br /> restaurants work—one table at a time.</h3>
        </div>

        <div id='GSN'>
         <HashLink to ="#BUILD">  <h4 style={{color:"white"}}>GET STARTED TODAY</h4> </HashLink>
          <FaArrowRight id='Ar' />
         
        </div>
        <div className='F1'> <img src='Frame1.png'/></div>
      </div>
       <center>
      <div id='BUILD'> <p id='BD'>BUILD FOR EVERY TYPE OF FOOD BUSINESSES </p></div>
      </center>

  
  <br/><br/>
  <div className="container-ico">
  <Marquee>
  <div className="item">
    <img src="dish.png" alt="Cafe"/>
    <p>Café</p>
  </div>
  <div className="item">
    <img src="Bread.png" alt="Icecream"/>
    <p>Icecream Parlor</p>
  </div>
  <div className="item">
    <img src="drink.png" alt="Fine Dine"/>
    <p>Fine Dine</p>
  </div>
  <div className="item">
    <img src="pizza.png" alt="Pizza"/>
    <p>Pizzeria</p>
  </div>
  <div className="item">
    <img src="carbon_cafe.png" alt="Bar & Brewery"/>
    <p>Bar & Brewery</p>
  </div>
  <div className="item">
    <img src="ice-cream.png" alt="Bar & Brewery"/>
    <p>Bar & Brewery</p>
  </div>
  <div className="item">
    <img src="chair.png" alt="Bar & Brewery"/>
    <p>Bar & Brewery</p>
  </div>
  <div className="item">
    <img src="cloud.png" alt="Bar & Brewery"/>
    <p>Bar & Brewery</p>
  </div>
  </Marquee>
</div>


      {/* 50-50 % dividing screen */}
      \<section className="customer_page">
        <div className="page-content-box">
          <div className="page-content">
            <p id='p1'>What do we offer for <br /> the<span> customer panel</span>?</p>
            <p id='p2'>A sleek, user-friendly device placed at every <br /> table, designed to enhance the dining <br /> experience. Diners can browse menus, <br /> customize orders, and place them directly <br /> without waiting for staff.</p>
            
              <center>
              <a className='Exp-button' href="/Customer" style={{marginLeft:'-120px'}}>  Explore More &rarr; </a>
            </center>
          </div>
          <div className="content-img">
            <center>
              <img src='new1.png' alt="" />
            </center>
          </div>
        </div>
        <div className="page-content-box">
          <div className="content-img">
            <center>
              <img src='new3.png' alt="" />
            </center>
          </div>

          <div className="page-content">
            <p id='p1'>What do we offer for <br />   the<span>  admin panel</span>?</p>
            <p id='p3'>A Powerful and intuitive tool designed to <br /> streamline restaurant operations. It <br />  enables staff to manage orders from every <br />  table in real-time, track delivery orders <br /> from third party platforms and <br />
              monitor payment easily.</p>
           
              <center>
                
                <a className='Exp-button' href="/merchant" style={{marginRight:'-150px'}}> &larr; Explore More </a>
                </center></div>
          
        </div>
      </section>




      
      

<section className="foodsites">
        <img src={pattern} alt="" className="pattern-img"/> 
        <div className="foodsite-info">
         <p>Integrated with your favorite Food Ordering Applications</p>
         <center>
         <span>Analyze and optimize your restaurant’s performance with dedicated insights for dine-in and food delivery platforms.</span>
         </center>

         <div className="site-icons">
            <img src={zomato} alt="" />
            <img src={swiggy} alt="" />
            <img src={eatsure} alt="" />
         </div>
        </div>

    </section>

      <div id='testimonials'>“
        <div>  <p id='test'>TESTIMONIALS</p> </div>
        <p id='client' style={{ marginTop: "50px" }}>What Our Client Says</p>
        <div>
          <Marquee pauseOnHover speed={100} style={{ marginTop: "50px" }}>
            <img src='review1.png' className='rev-img' />
            <img src='review2.png' className='rev-img' />
            <img src='review3.png' className='rev-img' />
          </Marquee>
        </div>
      </div>
        <div id="section1"><Contact/></div>
      
      {/* <Contact_form /> */}

      <Footer />

    </section>
  )
}

export default App;