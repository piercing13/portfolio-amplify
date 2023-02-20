import React, {useRef, useState} from 'react'
import './Contact.css'
import logo from '../logo.png'
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin} from "react-icons/bs";
import emailjs from 'emailjs-com';


function Contact() {
  const form= useRef();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkEmail = (e) => {
    setEmail(e.target.value)
    

    if (regex.test(email)=== false){
      setError('Please enter a valid email address')

    } else{
      setError('');
      return true
    }
    
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1uyd46r', 'template_fi6idtc', form.current, 'eVTQDEtFVMrZGfacI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <div className='contact' >
      <div className="contents">

      <div className="logo-container">
            <Link to='/'><img src={logo} className='logo'/></Link>
      </div>

      <div className="socmed">
          <div className="line"></div>
          <div className="email"  onClick={(e) => {window.location.href ='mailto:ririramadhani2@gmail.com';}}>
          <SiGmail/>
          </div>
          <div className="github" onClick={(e) => {window.open('https://github.com/95SR', '_blank');}}>
            <AiFillGithub/>
          </div>
          <div className="linkedin" onClick={(e) => {window.open('https://www.linkedin.com/in/syahri-ramadhani-21381312b/', '_blank');}}>
            <BsLinkedin/>
          </div>

        </div>

        <div className="form-container">

        <div className='subtitle'>Contact Me</div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="info">
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email Address' required onChange={checkEmail}/>
          </div>
          
          <p className='error-msg'>{error}</p>
          <textarea name='message' rows='7' placeholder='Your Messages' required ></textarea>
          <button  type='submit'>Send Message</button>
        </form>


        </div>




      </div>

    </div>
  )
}

export default Contact