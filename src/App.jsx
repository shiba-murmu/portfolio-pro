import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer/Footer'
import Experience from './components/Experience/Experience'
import About from './components/About/About'
import Home from './components/home/Home'
import Projects from './components/Projects/Projects'

export default function App() {
  return (
    <>
    <div className='bg-[#171d32] h-auto w-full overflow-hidden'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
    </>
  )
}
