import React from 'react'
import Home from '../views/home'
import About from '../views/about'
import Achivements from '../views/achivements'
import Skills from '../views/skills'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './navbar'
import SocialMedia from './socialMedia'
import Footer from './footer'

function Routers() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achivements" element={<Achivements />} />
      </Routes>
      <SocialMedia />
      <Footer />
    </Router>
  )
}

export default Routers