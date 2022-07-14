import React from 'react'
import nerd from '../../Assets/nerd.png'
import expert from '../../Assets/expert.png'
import weather from '../../Assets/weather.jpeg'
import hotel from '../../Assets/hotel.png'
import netflix from '../../Assets/netflix.png'
import background from '../../Assets/background.png'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div className='md:ml-24 w- ml-20 h-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition:{duration:0.4} }}
    >
      <h1 className='text-2xl text-indigo-600 p-6 uppercase'>
        Projects
      </h1>
      <div className='p-4 bg-slate-100 rounded-sm shadow-md my-4 mx-2'>
        <img src={nerd} className=' h-64 object-cover' />
        <p className='font-bold text-lg uppercase text-indigo-700 py-2'>Nerdeye Landing Page clone</p>
        <p className='text-sm text-indigo-600 py-2'>Technologies Used: React, Tailwindcss</p>
        <ul className='text-indigo-800 text-sm pb-4'>
          <li>-Large display mockup and sizings were given and translated into a fully responsive website</li>
          <li>-Orientation for smaller displays were determined by me</li>
        </ul>
        <a href="https://nerrdeye.netlify.app/" className='p-2 text-indigo-700 font-semibold'>Live</a>
        <a href="https://github.com/Israel-sanmi/Nerdeye-est" className='p-2 text-indigo-700 font-semibold'>Github</a>
      </div>
      <div className='p-4 bg-slate-100 rounded-sm shadow-md my-4 mx-2'>
        <img src={expert} className=' h-64 object-cover' />
        <p className='font-bold text-lg uppercase text-indigo-700 py-2'>Expernoire Landing Page clone</p>
        <p className='text-sm text-indigo-600 py-2'>Technologies Used: React, Tailwindcss</p>
        <ul className='text-indigo-800 text-sm pb-4'>
          <li>-Large display mockup and sizings were given</li>
          <li>-Translated into a fully responsive website</li>
          <li>-Orientation for smaller displays were determined by me</li>
        </ul>
        <a href="https://nerrdeye.netlify.app/" className='p-2 text-indigo-700 font-semibold'>Live</a>
      </div>
      <div className='p-4 bg-slate-100 rounded-sm shadow-md my-4 mx-2'>
        <img src={weather} className=' h-64 object-cover' />
        <p className='font-bold text-lg uppercase text-indigo-700 py-2'>USA weather App</p>
        <p className='text-sm text-indigo-600 py-2'>Technologies Used: React, Tailwindcss, RestApi, Redux</p>
        <ul className='text-indigo-800 text-sm pb-4'>
          <li>-Information on weather pulled from a USA weather API</li>
          <li>-Weather information is gotten through the inputbox where the endpoint is updated dynamically</li>
          <li>-Orientation for smaller displays were determined by me</li>
        </ul>
        <a href="https://weatherusa.netlify.app/" className='p-2 text-indigo-700 font-semibold'>Live</a>
        <a href="https://github.com/Israel-sanmi/Weather-app-usa-" className='p-2 text-indigo-700 font-semibold'>Github</a>
      </div>
      <div className='p-4 bg-slate-100 rounded-sm shadow-md my-4 mx-2'>
        <img src={hotel} className=' h-64 object-cover' />
        <p className='font-bold text-lg uppercase text-indigo-700 py-2'>Hotel Blue</p>
        <p className='text-sm text-indigo-600 py-2'>Technologies Used: React, Tailwindcss, Router-dom</p>
        <ul className='text-indigo-800 text-sm pb-4'>
          <li>-React Router was used to create multiple views for the contact information page</li>
          <li>-Translated into a fully responsive website</li>
          <li>-Orientation for smaller displays were determined by me</li>
        </ul>
        <a href="https://naughty-neumann-5d299c.netlify.app/" className='p-2 text-indigo-700 font-semibold'>Live</a>
        <a href="https://github.com/Israel-sanmi/Hotel-landing-page" className='p-2 text-indigo-700 font-semibold'>Github</a>
      </div>
      <div className='p-4 bg-slate-100 rounded-sm shadow-md my-4 mx-2'>
        <img src={netflix} className=' h-64 object-cover' />
        <p className='font-bold text-lg uppercase text-indigo-700 py-2'>Netflix Landing Page Clone</p>
        <p className='text-sm text-indigo-600 py-2'>Technologies Used: Html, tailwindcss</p>
        <ul className='text-indigo-800 text-sm pb-4'>
          <li>-Large display mockup and sizings were given</li>
          <li>-Translated into a fully responsive website</li>
          <li>-Orientation for smaller displays were determined by me</li>
        </ul>
        <a href="https://clever-wozniak-2d4753.netlify.app/" className='p-2 text-indigo-700 font-semibold'>Live</a>
        <a href="https://github.com/Israel-sanmi/netflix-clone" className='p-2 text-indigo-700 font-semibold'>Github</a>
      </div>
      <div className='p-4 bg-slate-100 rounded-sm shadow-md my-4 mx-2'>
        <img src={background} className='h-64 object-contain' />
        <p className='font-bold text-lg uppercase text-indigo-700 py-2'>Background Changer</p>
        <p className='text-sm text-indigo-600 py-2'>Technologies Used: Html, tailwindcss, Javascript</p>
        <ul className='text-indigo-800 text-sm pb-4'>
          <li>-Large display mockup and sizings were given</li>
          <li>-Translated into a fully responsive website</li>
          <li>-Orientation for smaller displays were determined by me</li>
          <li>-Javascript DOM used to fetch colors using hex codes</li>
        </ul>
        <a href="https://laughing-fermat-513034.netlify.app/" className='p-2 text-indigo-700 font-semibold'>Live</a>
        <a href="https://github.com/Israel-sanmi/Background-color-changer" className='p-2 text-indigo-700 font-semibold'>Github</a>
      </div>
    </motion.div>
  )
}

export default Projects