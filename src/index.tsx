import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import { AboutView } from './components/about/AboutView';
import {ServicesView} from './components/service/ServicesView'
import {ThankYouContact} from './components/contactUs/ThankYouContact'
import { ContactView } from './components/contactUs/ContactView';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/thankyou" element={<ThankYouContact/>}/>
      <Route path="/contact" element={<ContactView />}/>
      <Route path="/services" element={<ServicesView />}/>
      <Route path="/about" element={<AboutView />}/>
      <Route path="/" element={<App />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
