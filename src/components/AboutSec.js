import React from 'react';
import "../Styles/AboutSec.css";
import { NavLink } from "react-router-dom";

function AboutSec() {
  return (
    <div className='about_sec'>
      <div className='about_sectext'>
      <p className='abt_heading'> <span className='red'>About </span> Us</p>
        <p className='abt_text'>
        The <span className='red'>Cyber</span>security Club <span className='red'>(</span> <span className='italic'>hereafter called the <span className='red'>Zer0</span>d4y an Infosec Club</span> <span className='red'>)</span> shall aim at improving the <span className='red'>Cyber</span>security & <span className='red'>Info</span> Sec culture in the college and thrive to instill such skills in the students of this college.
          <NavLink to="/about" className="read_more">Read More</NavLink>
        </p>
      </div>
    </div>
  )
}

export default AboutSec
