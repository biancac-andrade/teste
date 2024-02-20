import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Portofolio } from './pages/Porfolio'
import { Contact } from './pages/Contact'
import { LandingPage } from './pages/LandingPage'

export const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Landing Page</Link>
        <Link to="/Home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}
