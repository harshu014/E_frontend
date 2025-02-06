import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Customer from './customer.jsx';
import Merchant from './merchant.jsx';
import Navb from './components/Navb.jsx';
import Contact from './components/Contact.jsx';
import About from './About.jsx';
import Carreer from './Carreer.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navb/>}>
          <Route index element={<App />} />
          <Route path="customer" element={<Customer />} />
          <Route path="merchant" element={<Merchant/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="about" element={<About/>} />
          <Route path="carreer" element={<Carreer/>} />
          

          
        </Route>
      </Routes>
    </BrowserRouter>
)
