import React from 'react'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {FaTwitterSquare} from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/akshatpawar/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://www.github.com/akshatpawar/" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.twitter.com/akshat19p/" target="_blank" rel="noreferrer"><FaTwitterSquare/></a>
    </div>
  )
}

export default HeaderSocials