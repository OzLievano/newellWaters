import React, { useState, FunctionComponent } from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './ContactForm.css'

interface FormState {
    firstName:string 
    lastName: string
    address: string
    email: string
    phone:string
    service: string
    message: string
}

export const ContactForm:FunctionComponent = () => {
    const [formState,setFormState] = useState<Partial<FormState>>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, value: string): void => {
        setFormState({
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="contact-form">
            <div className="contact-text">
               <h1>GET IN TOUCH</h1>
               <p>6121 King George Dr. Charlotte, North Carolina</p>
               <p>support@newellpressurewash.com</p> 
            </div>
            <Box 
                    component="form"
                    sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
                    noValidate
                    autoComplete="off"
                >
                <div className="first-field">
                    <TextField
                        required
                        id="outlined-required"
                        label="First Name"
                        placeholder="Enter Your First Name"
                        value={formState.firstName}
                />
                    <TextField
                required
                id="outlined-required"
                label="Last Name"
                placeholder="Enter Your Last Name"
                value={formState.lastName}
                />
            </div>
            <div>
                <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="Enter Your Email"
                value={formState.email}
                />
                <TextField
                required
                id="outlined-required"
                label="Address"
                placeholder="Enter Your Address"
                value={formState.address}
                />
            </div>
            <div>
                <TextField
                required
                id="outlined-required"
                label="Phone Number"
                placeholder="Enter Your Phone Number"
                value={formState.phone}
                />
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-label">Services</InputLabel>
                    <TextField required
                        id="demo-simple-select"
                        value={formState.service}
                        label="Services"
                        placeholder='Wood, Concrete, or Consultation Services'
                    />
                </FormControl>
            </div>
            <div>
                <TextField
                id="outlined-multiline-flexible"
                label="Additional Information"
                multiline
                maxRows={4}
                value={formState.message}
                placeholder="please enter any additional information here"
                />
            </div>
            <Button style={{marginBottom:'30px',marginTop:'10px', marginLeft:'5px'}} variant="contained">Submit</Button>
            </Box>
        </div>
    )
}

