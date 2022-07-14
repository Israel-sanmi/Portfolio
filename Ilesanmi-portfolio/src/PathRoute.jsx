import React from 'react'
import About from './Components/AboutPage/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import HeroPage from './Components/HeroPage/HeroPage'
import { Routes, Route, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion';

const PathRoute = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' index element={<HeroPage />}>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/skills' element={<Skills />}>
        </Route>
        <Route path='/work' element={<Projects />}>
        </Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default PathRoute