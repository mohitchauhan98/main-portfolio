import './ContactForm.css'
import { FiUser } from "react-icons/fi";
import { SiMaildotru } from "react-icons/si";
import { FaRegMessage } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { useState } from 'react';

const ContactForm = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    const handleChange = (event) => {
        const {name , value} = event.target
        if(name === 'name') setName(value)
        else if(name === 'email') setEmail(value)
        else if(name === 'message') setMessage(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmail('')
        setName('')
        setMessage('')
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className=''>
                <div className='contact-form-box'>
                    <label className='label-input'><FiUser />Name</label>
                    <input type = 'text' name = 'name' value = {name} onChange={handleChange} required className='input-text'/>
                </div>
                <div className='contact-form-box'>
                    <label className='label-input'><SiMaildotru />Email</label>
                    <input type = 'email' required className='input-text' name = 'email' value = {email} onChange={handleChange}/>
                </div>
                <div className='contact-form-box'>
                    <label className='label-input'><FaRegMessage />Message</label>
                    <textarea cols="25" rows = "10" required className='input-textarea'  name = 'message' value = {message} onChange={handleChange}></textarea>
                </div>
                <div className='contact-form-box'>
                    <button className='input-button' type='submit'><BiLogoTelegram /> Send Message</button>
                </div>
            </div>
        </form>
    </>
  )
}

export default ContactForm