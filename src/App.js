import './App.css';
import About from './pages/About';
import Events from './components/Events';
import Resources from './components/Resources';
import { Routes, Route } from "react-router-dom";
import Members from './components/Members';
import Homepage from './pages/Homepage';


function App() {
  
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/members' element={<Members />} />
    </Routes>
  </>
  );
}

export default App;
