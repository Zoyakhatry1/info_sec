import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Nav/Navbar';
import Sidebar from './components/Nav/Sidebar';
import About from './components/About';
import Events from './components/Events';
import Resources from './components/Resources';
import { Routes, Route } from "react-router-dom";
import Members from './components/Members';
import Hero from './components/Hero';


function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };
  return (
    <>
    <Navbar toggle={toggle} />
    <Sidebar isopen={isopen} toggle={toggle} />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/members' element={<Members />} />
    </Routes>
    <Hero />
  </>
  );
}

export default App;
