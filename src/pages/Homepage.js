import React,{useState} from 'react'
import AboutSec from '../components/AboutSec'
import EventSec from '../components/EventSec'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Nav/Navbar'
import Sidebar from '../components/Nav/Sidebar'
import TeamSec from '../components/TeamSec'

function Homepage() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
    console.log(isopen);
  };
  return (
    <div>
       <Navbar toggle={toggle} />
       <Sidebar isopen={isopen} toggle={toggle} />
        <Hero />
        <AboutSec />
        <EventSec />
        <TeamSec />
        <Footer />
    </div>
  )
}

export default Homepage