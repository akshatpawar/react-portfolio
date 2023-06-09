import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>AKSHAT</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/akshatpawar/" target='_blank'><FaLinkedin/></a>
        <a href="https://www.instagram.com/akshatpawar_" target='_blank'><FaInstagram/></a>
        <a href="https://github.com/akshatpawar" target='_blank'><FaGithub/></a>
        <a href="https://twitter.com/akshat19p" target='_blank'><FaTwitter/></a>
      </div>

      <div className="footer__copy">
        <small>&copy; Akshat Pawar. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer