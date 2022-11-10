import React,{useState} from 'react'
import Navbar from '../components/Nav/Navbar';
import Aboutcon from '../components/Aboutcon';
import Sidebar from '../components/Nav/Sidebar';
import Footer from '../components/Footer';

function About() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
    console.log(isopen);
  };
  return (
    
    <div >
        <Navbar toggle={toggle} />
       <Sidebar isopen={isopen} toggle={toggle} />
       <Aboutcon />
        <Footer />
    </div>
    
  )
}

export default About
