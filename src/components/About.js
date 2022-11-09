import React from 'react';
import ReadMoreReact from 'read-more-react/dist/components/ReadMoreReact';
import "../Styles/About.css";

function About() {
  return (
    <div className='container_about' >
       <div className='about_box'>
          <h1 className='about_header'>About Us</h1>
          <p>
          The Cybersecurity Club (hereafter called the Zer0d4y an Infosec Club) shall aim at improving the
            Cybersecurity & InfoSec culture in the college and thrive to instill such skills in the students of this college.  
          </p>
       </div>
           
       <div>
          <h1 className='about_header'>Objectives of the Club</h1>
            <p >1. The main objective of the Club shall be to revive, maintain and popularise
              CyberSecurity or Information Security aspects within the students of this NIT Srinagar.</p>
            <p>2. The Club is also focused on popularising this move among the new batches so that they
               get ample grooming and henceforth, provide them opportunities to hone their skills.</p>
            <p>
              3. In the long term, the Club shall aim to produce skillful set of students with
                cybersecurity knowledge in the campus so that any CyberSecurity or Information
                Security based requirements for the campus may be fulfilled by Zer0d4y Club.
            </p>
            <p>
             4. The Club shall take the responsibility to facilitate NIT Srinagar to produce creative,
                 innovative and skilled leaders in the Cybersecurity/Infosec industry.
          </p>
          <p>
            5. The Club shall aim to instill exemplary collaborative work ethics amongst the
                members and coordinating students, which shall greatly help them in the future.
          </p>
          <p>
            6. The Club shall aim to provide a simulation of the Infosec world to the students by the
              use of workshops , Capture the flag events and organised sessions on cybersecurity.
          </p>
          <p>
            7. The Club can also participate in Worldwide CTF or CyberSecurity Events and can
            organize such events in NIT Srinagar
          </p>
      
          </div>
         
        
       </div>
    
  )
}

export default About
