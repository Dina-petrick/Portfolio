import React, { useState } from 'react';
import "./contact.css"
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {useRef} from "react";
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

function Contact() {
    const formRef = useRef();
    const [done, setDone] =useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  

    const handleSubmit = (e) =>{
        e.preventDefault();
        emailjs.sendForm(
            'service_juk5kb8',
            'template_hgubqev', 
            formRef.current, 
            '9PMmxB1B5rRJZ7-wW'
            )
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's discuss my projects</h1>    
                <div className="c-info">
                    <div className="c-info-item">
                        <img 
                        src={Phone}  alt=""
                        className='c-icon' />
                        +91 9234 321 664
                    </div>

                    <div className="c-info-item">
                        <img 
                        src={Email}  alt=""
                        className='c-icon' />
                        contact@gmail.com
                    </div>

                    <div className="c-info-item">
                        <img 
                        src={Address}  alt=""
                        className='c-icon' />
                        245 King Street, Touterie Victoria 8520 Australia
                    </div>
                </div>
            </div>    
            <div className="c-right">
                <p className="c-desc">
                    <b>What’s your story?</b> Get in touch. Always available for
                    freelancing if the right project comes along. me.
                </p>

                <form ref={formRef} onSubmit= {handleSubmit}>
                    <input style = {{backgroundColor : darkMode && "#333"}} type="text" placeholder='Name' name="user_name" />
                    <input style = {{backgroundColor : darkMode && "#333"}} type="text" placeholder='Subject' name="user_subject" />
                    <input style = {{backgroundColor : darkMode && "#333"}} type="text" placeholder='Email' name="user_email" />
                    <textarea style = {{backgroundColor : darkMode && "#333"}} rows="5" placeholder='Message' name="message"></textarea>
                    <button>Submit</button>
                    {done && "   Thank You..."}
                </form>
            </div>    
        </div>   
    </div>
  )
}

export default Contact