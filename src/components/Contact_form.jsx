import React, { useState } from 'react';
import axios from 'axios';

const Contact_form = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
            setFormData({ name: '', email: '' , message: ''});
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert(error.response.data.message); // Show the error message to the user
            } else {
                console.error('Error submitting form', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Message:</label>
                <input type="text" name="message" value={formData.message} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Contact_form;