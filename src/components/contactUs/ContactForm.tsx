import React, { useState, FunctionComponent } from 'react'
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

        setFormState(formState);
      }

    return (
        <div className="contact-form">
            <div className="contact-text">
               <h1>GET IN TOUCH</h1>
               <p>6121 King George Dr. Charlotte, North Carolina</p>
               <p>support@newellpressurewash.com</p> 
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
                <button onClick={submitHandler}>Submit</button>
            </div>
        </div>
    )
}

