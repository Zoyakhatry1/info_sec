import React,{useState} from 'react'
import Navbar from '../components/Nav/Navbar';
import Sidebar from '../components/Nav/Sidebar';
import Footer from '../components/Footer';
import EventsCon from '../components/EventsCon';

function Events() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
    console.log(isopen);
  };
  return (
    <div>
      <div>
        <Navbar toggle={toggle} />
        <Sidebar isopen={isopen} toggle={toggle} />
      </div>
        <EventsCon />
        <Footer />
    </div>
  )
}

export default Events
