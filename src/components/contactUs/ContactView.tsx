import React, { useState, FunctionComponent } from 'react'
import { Footer } from '../footer/Footer';
import { TopNavBar } from '../topNavBar/TopNavBar';

export const ContactView:FunctionComponent = () => {
    const [name, setName] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [service, setService] = useState<string>('');

    const handleChange = (e:any) => {
        e.setState({value: e.target.value})
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
    }

    return (
        <div>
            <TopNavBar/>
            <form>
              <label>
                  Name:
                  <input type="text"/> 
              </label>
              <label>
                  Address:
                  <input type="text"/>
              </label>
              <label>
                  Email:
                  <input type="text"/>
              </label>
              <label>
                  Phone:
                  <input type="text"/>
              </label>
              <label>
                  Service:
                <select id="services" name='services'>
                    <option value="consultations">Consultations</option>
                    <option value="concrete surfaces">Concrete Surfaces</option>
                    <option value="wood surfaces">Wood Surfaces</option>
                </select>
              </label>
              <label>
                  Message:
                  <textarea name="message" placeholder="please enter your request here"></textarea>
              </label>
            </form>
            <Footer/>
        </div>
    )
}
