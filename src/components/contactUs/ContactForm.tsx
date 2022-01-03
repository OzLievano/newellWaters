import React, { useState, FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import axios from 'axios'

import './ContactForm.css'


export interface FormState {
    firstName:string
    lastName:string
    address:string
    email:string
    phone:string
    service:string
    message:string
}
export const ContactForm = () => {
    const navigate = useNavigate();
    const [formState,setFormState] = useState<Partial<FormState>>({
        firstName:"",
        lastName:"",
        address:"",
        email:"",
        phone:"",
        service:"",
        message:"" 
    });

    const handleChange =(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>):void => {
        setFormState({...formState,[e.currentTarget.name]:e.currentTarget.value})
    }

    const submitHandler = (e:any) => {
        e.preventDefault();
    
        axios.post('https://sheet.best/api/sheets/27551cfc-e2ec-4757-8374-ab82b4b17e97', formState)
        .then(response => {
          console.log(response);
        })
        console.log(formState);

        setFormState({firstName:"",
        lastName:"",
        address:"",
        email:"",
        phone:"",
        service:"",
        message:"" });

        const navigateTo = ()=> navigate('/thankyou')
        navigateTo()
      }

    return (
        <div className="contact-form" >
            <div className="contact-text">
               <h1>GET IN TOUCH</h1>
               <p><b>Phone Number:</b> 305-781-4764</p>
               <p><b>Email:</b> support@newellpressurewash.com</p> 
            </div>
            <div className="form-inputs">
                <h1> Please Enter Your Contact Information </h1>
                First Name:
                <input type="text" name="firstName" placeholder='Enter your first name' onChange={handleChange} value={formState.firstName}/>
                Last Name:
                <input type="text" name="lastName" placeholder='Enter your last name' onChange={handleChange} value={formState.lastName}/>
                Address:
                <input type="text" name="address" placeholder='Enter your address' onChange={handleChange} value={formState.address}/>
                Email:
                <input type="text" name="email" placeholder='Enter your email' onChange={handleChange} value={formState.email}/>
                Phone Number:
                <input type="text" name="phone" placeholder='Enter your phone #' onChange={handleChange} value={formState.phone}/>
                Service:
                <input type="text" name="service" placeholder='Describe your service' onChange={handleChange} value={formState.service}/>
                Additional Information:
                <textarea name="message" placeholder='Any Additional Info' onChange={handleChange} value={formState.message}/>
                <Button variant="contained" className='action-button' onClick={submitHandler}>Submit</Button>
            </div>
        </div>
    )
}

