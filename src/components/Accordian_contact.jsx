
import  React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './AccStyle.css'
import { Typography } from '@mui/material';
import axios from "axios"; // Ensure axios is imported
import { useEffect, useState } from 'react';


const Accordian_contact = () => {

  // const [feedBack, setFeedBack] = useState({ name: '', email: '', phone: '' , outlet:'', city:'' });

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFeedBack({ ...feedBack, [name]: value });
  // };
  
    const [feedbackData, setFeedbackData] = useState({
        name: '',
        email: '',
        phone: '',
        // outlet_type: '',
        outlet_name: '',
        city: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFeedbackData({ ...feedbackData, [name]: value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('http://localhost:3000/api/feedback', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(feedbackData),
    //         });
    //         if (response.ok) {
    //             alert('Feedback submitted successfully!');
    //             setFeedbackData({ name: '', email: '', phone: '', outlet_type:'', outlet_name:'', city:'' }); // Reset form
    //         } else {
    //             alert('Error submitting feedback');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         alert('Error submitting feedback');
    //     }
    // };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:3000/api/feedback', feedbackData);
          console.log('Data submitted successfully:', response.data);
          //alert
          alert('Data submitted successfully!');

          setFeedbackData({ name: '', email: '', phone: '',  outlet_name:'', city:'' });// Optionally reset the form
         
        } catch (error) {
          if (error.response && error.response.status === 400) {
              alert(error.response.data.message); // Show the error message to the user
          } else {
              console.error('Error submitting form', error);
          }
      }
  };
  

  const items = [
    { title: 'How does EatoPae work for restaurants and hotels?', content: 'EatOPae is a digital ordering system that allows:  Restaurants to place a device on tables where customers can browse the menu, place orders, and make payments. ' },
    { title: 'Can customers reorder food without scanning the QR code again?', content: 'Yes! Once a customer places an order, they can add more items from the same device or session without rescanning the QR code. This ensures a smooth and hassle-free experience. ' },
    { title: 'How does the hotel receive and manage in-room dining orders?', content: 'When a guest places an order through EatOPae, the request is instantly sent to the hotel’s kitchen or service team. The admin panel allows staff to track, prepare, and deliver orders efficiently. ' },
    {title: 'Can restaurants and hotels update their menus in real-time?', content:'Absolutely! EatOPae provides an admin dashboard where restaurants and hotels can add, edit, or remove items in real-time. Changes reflect instantly for customers.'},
    {title: 'Do customers need to download an app to use EatoPae?', content:'No, customers don’t need to download any app. They can simply scan a QR code or use the installed device at their table or room to access the menu and place orders instantly. '},
    {title: 'Can guests charge their room service orders to their hotel bill?', content:'Yes! Hotels using EatOPae can allow guests to either pay instantly or add the order to their room bill, which they can settle during checkout.'},
    {title: 'Does EatoPae support multiple locations for chain restaurants and hotels?', content:'Yes, EatOPae is fully scalable and supports multi-location management, allowing restaurant or hotel chains to oversee orders from different branches through a single dashboard.'},
    {title: 'What are the pricing plans for using EatoPae?', content:'Please contact us for a tailored quote.'},
    
];

  return (
       <>
     <div className='container'>
      <div className='container-flex'>
       <h2>FAQ's</h2>
      
      <div>
      
        <center>
            {items.map((item, index) => (
                <Accordion key={index} sx={{ marginBottom: 1 }} style={{width:'80%'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{color:'white'}} />}
                        aria-controls={`panel${index + 1}a-content`}
                        id={`panel${index + 1}a-header`}
                    style={{background:'#2A2A2A', width:'610px'}}>
                        <Typography style={{color:'white', fontSize:'16px'}}>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{background:'#2A2A2A', width:'610px', textAlign:'left'}}>
                        <Typography style={{color:'rgba(255, 255, 255, 0.51)'}}>{item.content}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
             </center>
        </div>
      </div>

      <div className='container'>
        <center>
         
      <form style={{marginLeft:'200px'}} onSubmit={handleSubmit}>
      <h3>Let Us Reach You.</h3> <br/>
      <label style={{marginLeft:'-52px'}}>Name</label>
      <input type="text" id="name" name="name" placeholder="Full Name" required
       value={feedbackData.name}
       onChange={handleChange}/>
      <br/> <br/>
      <label style={{marginLeft:'-60px'}}>Email</label>
      <input type="email" id="email" name="email" placeholder="you@email.com" required
       value={feedbackData.email}
       onChange={handleChange}/>
      <br/> <br/>
      <label >Contact No.</label>
      <input type="text" id="phone" name="phone" placeholder="+91 0000 00000" required
       value={feedbackData.phone}
       onChange={handleChange}/>
      <br/> <br/>
      <label >Outlet Name</label>
      <input type="text" id="outlet_name" name="outlet_name" placeholder="Outlet Name" required
       value={feedbackData.outlet_name}
       onChange={handleChange}/>
       <section style={{display:'flex'}} className='container-form'>
        <div style={{paddingLeft:"25px"}}>
      <h4>Outlet Type</h4>
      <select id="outlet-type" name="outlet-type" required style={{width:'200px', height:'45px', background:'rgba(255, 255, 255, 0.1)', borderRadius:'10px', color:'grey', fontSize:'18px', fontWeight:'bold'}}  value={feedbackData.outlet_type}
                    onChange={handleChange}>
        <option value="Hotel">Hotel</option>
        <option value="Fine Dine">Fine Dine Restro</option>
        <option value="QSR">QSR</option>
        <option value="Franchise">Franchise</option>
        <option>Cafe</option>
        <option>Bar</option>
        <option>Cafe & Bar</option>
       </select>
      </div>

      <div style={{paddingLeft:"25px"}}>
      <h4>City</h4>
      <input type="text" id="city" name="city" placeholder="City" required style={{width:'200px'}}
       value={feedbackData.city}
       onChange={handleChange}/>
      </div>
      </section>
      <button type="submit" >Submit &rarr;</button>
    </form>
    </center>        
            </div>
      </div>

     </> 
  );
}

export default Accordian_contact;

