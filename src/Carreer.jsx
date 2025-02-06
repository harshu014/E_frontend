import React from 'react';
import './Carriers.css';
import Footer from './components/Footer';
const Carreer = () => {
    return (
        <>
            <section className="about_hero">
                <div className="content">
                    <center>
                        <h2>Let’s Grow Together</h2>
                        <span>At the heart of every success story is collaboration,<br /> trust, and a shared vision. Together, we can <br /> overcome challenges, embrace opportunities, and <br /> achieve incredible milestones.<br /> Join us on this journey of innovation and progress. <br /> Let’s build a brighter future, hand in hand. Because <br /> when we grow together, we thrive together.</span>
                    </center>

                </div>
            </section>

            <div className='Join'>
                <h4>Why Join Us</h4>
            </div>

            <div className="container">
                <div className="box">
                    <h2>1. Hands-On Learning Opportunities</h2>
                    <p>We believe the best way to learn is by <br />doing. You'll work on real projects that <br />have a tangible impact, giving you the <br />chance to sharpen your skills and gain<br /> industry-relevant experience.</p>
                </div>
                <div className="box">
                    <h2>2. Mentorship from Experts</h2>
                    <p>Our team includes industry veterans <br/> and passionate professionals who are <br/>eager to share their knowledge and <br/>guide you in your career journey.</p>
                </div>

            </div>
            <div className="container">
                <div className="box">
                    <h2>3. A Collaborative Environment</h2>
                    <p>Work in a supportive, fast-paced <br/> environment where creativity and <br/>collaboration are at the heart of <br/> everything we do.</p>
                </div>
                <div className="box">
                    <h2>4. Build a Strong Foundation</h2>
                    <p>Whether you’re just starting out or <br/> looking to switch fields, We offers the<br/> experience and connections you need<br/> to succeed in the long term.</p>
                </div>

            </div>


            <section className='jobs'>
                <center> <h3>Find By Jobs Role</h3></center>
               <div className='container-jobs'>
                <img src='App.png'/>
                <img src= 'UI.png'/>
               </div>
               <div className='container-jobs'>
                <img src='MERN.png'/>
                <img src= 'S&M.png'/>
               </div>
            </section>
            <div className='container' style={{marginTop:'50px'}}>
                        <div className='square'></div>  <p id="form">Not Finding Your Suitable/Desired Job Profile ,We are still hiring for all positions. <br/> Fill this <a href='/' style={{color:'yellow'}}>Form</a>  and we will in touch with</p>
                    </div>
            <Footer/>


        </>
    )
}

export default Carreer;