import React from 'react'
import About from '../components/About'
import Hero from '../components/Hero'
import Navbar from '../components/Nav/Navbar'

function Homepage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
    </div>
  )
}

export default Homepage