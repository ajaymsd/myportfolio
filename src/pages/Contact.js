import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../images/contact.jpg'
import {GrContactInfo} from 'react-icons/gr'
import {AiFillPhone} from 'react-icons/ai'
import {AiFillMail} from 'react-icons/ai'
import {FaAddressBook} from 'react-icons/fa'
import {AiFillGithub,AiFillLinkedin,AiFillInstagram, AiFillTwitterSquare} from "react-icons/ai"
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_md8w5p4', 'template_hib5hbp', form.current, 'eWR1uFGVnGLjo-qQY')
      .then((result) => {
          window.alert("Your Query Sent Successfully To Ajay");
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
     <div className="Contact mt-5">
      <div className='contact-container mt-5 container'>
       <div className='row mt-3'>
         
            <img src={contact} alt="Not Found" className='img img-responsive col-lg-5 d-md-none d-lg-block '></img>
          
          <div className='col-lg-7 '>
           <h2>Get In Touch</h2>
            <form ref={form} className='form mt-4' onSubmit={sendEmail}>
              <input type="text" className='form-control' placeholder='Name' style={{
                background:"transparent",
                border:"1px solid brown",
                
              }} name="user_name"/>
               <input type="email" className='form-control mt-4' placeholder='Email' style={{
                background:"transparent",
                border:"1px solid brown",
                
              }} name="user_email"/>

              <textarea rows="6" placeholder='Message' className='form-control mt-3' name='message' style={{
                background:"transparent",
                border:"1px solid brown",
                
              }}></textarea>
              <input type="submit" className='btn btn-success btn-md w-25 mt-3' value="Send"></input>
            </form>
            <div className='mt-3 cont' style={{
              fontWeight:"lighter"
            }}>
            <p style={{
              fontSize:"26px"
            }}>Contact</p>
            <p className=''><AiFillPhone className='mx-2'></AiFillPhone>6384945201</p>
            <p><AiFillMail className='mx-2'></AiFillMail>ajbalasubramanian2002@gmail.com</p>
            <p><FaAddressBook className='mx-2'></FaAddressBook>6,Chellamal Apartments, J.J Road, Rathinapuram, Madurai-11 , Tamilnadu ,India</p>
            <div className='d-flex justify-content-start mb-3 iconbox'>
                <AiFillGithub></AiFillGithub>
                <AiFillLinkedin></AiFillLinkedin>
                <AiFillInstagram></AiFillInstagram>
                <AiFillTwitterSquare></AiFillTwitterSquare>
        </div>
            </div>
          </div>
       </div>
      </div>
     </div>
    </>
  )
}

export default Contact