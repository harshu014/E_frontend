import React from 'react';
import './About.css';
import { RiDoubleQuotesL } from "react-icons/ri";
import Footer from './components/Footer';


const About = () => {
    return (
        <>
            <section className="hero">
                <div className="content">
                    <center>
                        <h2>About Us</h2>
                        <span>
                            Eatopae is designed to simplify restaurant <br /> operations, making order management and delivery <br /> tracking seamless for modern food <br /> businesses.Eatopae is designed to simplify <br />restaurant operations, making order management<br /> and delivery tracking seamless for modern food<br /> businesses
                        </span>
                    </center>

                </div>
            </section>

            <section className='Intro'>
                <h3>Who Are We</h3>
                <p>Eatopae is a next-gen restaurant and delivery management platform <br /> designed to simplify operations for restaurants while enhancing customer <br />experience. From customized in-dining services to real-time tracking of<br /> Swiggy & Zomato orders, we ensure seamless food management with <br />smart face-recognition payment integration.</p>

                <h3>What We Offer</h3>
                <ul>
                    <div className='container'>
                        <div className='square'></div>  <li>Admin Dashboard – A centralized platform for restaurant owners to manage <br />everything, including orders, menus, inventory, and analytics, all in one place.</li>
                    </div>
                    <div className='container'>
                        <div className='square'></div>  <li>Customer Panel (POS on Every Table) – A seamless self-ordering system at every <br />table, allowing diners to browse the menu, customize their orders, and place <br />requests without waiting for staff.</li>
                    </div>
                    <div className='container'>
                        <div className='square'></div> <li>Delivery Management – Integrated tracking and management of Swiggy & Zomato<br />orders, helping restaurants handle both in-house and online deliveries effortlessly.</li>
                    </div>
                </ul>
            </section>

            <div className='container'>
                <div className='text'>
                    <RiDoubleQuotesL style={{ color: ' rgba(255, 224, 0, 1)', fontSize: '100px', marginTop: '100px' }} />
                    <h5>Powering Smart Dining,<br /> Seamless Ordering, <br /> and Effortless Delivery!</h5>
                </div>
                <div>
                    <img src='Mac.png' style={{ width: '850px' }} />
                </div>
            </div>

            <div className='Mission'>
                <h4>Our Mission</h4>
                <p>To revolutionize restaurant management by bridging the gap between in-<br />house dining and delivery logistics, ensuring efficiency and superior <br />customer satisfaction.<br /><br />
                    Let’s take your restaurant operations to the next level.<br /> Get in touch with us today!
                </p>
            </div>

            <Footer />
        </>
    )
}

export default About;