


import React from 'react'
import './Contact.css';
import { useForm } from "react-hook-form";
import axios from "axios"; // Ensure axios is imported
import { useEffect, useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone:'', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/formdata', formData);
            console.log('Data submitted successfully:', response.data);
            //alert
            alert('Data submitted successfully!');

            // Optionally reset the form
            setFormData({ name: '', email: '', phone:'' , message: ''});
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert(error.response.data.message); // Show the error message to the user
            } else {
                console.error('Error submitting form', error);
            }
        }
    };

    return (
        <>
            <div className='container' style={{ marginTop: "80px" }}>
                <div className='container-flex'>
                    <div id='rafiki-box'><h5>We generally reply within 24 hours</h5></div>
                    <img src='rafiki.png' id='rafiki-img' />
                </div>
                <div className='container-flex'>
                    <form onSubmit={handleSubmit}>
                        <h4 className='Headng'>Contact Us</h4>
                        <label className='lab'>Name:</label> <br />

                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder='FullName'/>
                        <br /><br />

                        <label className='lab' style={{marginLeft:'-62px'}}>Email:</label> <br />

                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='you@gmail.com' />
                        <br /><br />

                        <label className='lab'>Phone: </label> <br />
                        <input placeholder='+91 0000000000' name='phone' type='text'  value={formData.phone}  onChange={handleChange}
                        ></input> <br /><br />

                        <label className='lab' style={{marginLeft:'6px'}}>Message/Query</label> 
                        <textarea type="text" name="message" value={formData.message} onChange={handleChange} placeholder='Write your message here..' />
                       <button type="submit" className='sub'>Submit &rarr;</button>
                            
                       
                    </form>
                </div> </div>

        </>
    )
}

export default Contact;
