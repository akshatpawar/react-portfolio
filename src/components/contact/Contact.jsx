import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaInstagram} from 'react-icons/fa'
import {TbBrandTelegram} from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1e1hmuf', 'template_07chf3d', form.current, 'U_PSf0EqXs6ldrGCE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option-item'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>akshatisonline@gmail.com</h5>
            <a href="mailto:akshatisonline@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option-item'>
            <FaInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>akshatpawar_</h5>
            <a href="https://www.instagram.com/akshatpawar_/" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option-item'>
            <TbBrandTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>akshatpawar</h5>
            <a href="https://t.me/akshatpawar" target='_blank'>Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message'/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact