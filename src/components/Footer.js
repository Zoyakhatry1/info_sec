import React from 'react';
import "../Styles/Footer.css";
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div className='footer_sec'>
       <div className="footer_links">
          <a className='footer_a' href="/"><YouTubeIcon /></a>
          <a className='footer_a' href="/"><LinkedInIcon /></a>
          <a className='footer_a' href="/"><FacebookIcon /></a>
          <a className='footer_a' href="/"><InstagramIcon /></a>
       </div>
       <p className='footer_text'>Inspired from Darknet Diaries.</p>
    </div>
  )
}

export default Footer
