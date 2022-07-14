import React from 'react'
import html from '../../Assets/html.png'
import css from '../../Assets/css.png'
import tailwind from '../../Assets/tailwind.png'
import js from '../../Assets/js.png'
import react from '../../Assets/react.png'
import git from '../../Assets/git.png'
import rest from '../../Assets/rest.png'
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <motion.div className='md:ml-24 ml-20 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition:{duration:0.4} }}
        >
            <div className=' h-screen bg-gray-100'>
                <h1 className='text-2xl text-indigo-600 p-6 uppercase'>Skills</h1>
                <p className='p-4 text-sm'>
                    Over the past few years i've honed some web development skills.
                </p>
                <hr />
                <div className='flex flex-wrap gap-4 p-5 justify-center'>
                    <img src={html} alt="html" className='w-24 h-24 hover:animate-blob' />
                    <img src={css} alt="css" className='w-24 h-24 hover:animate-blob' />
                    <img src={tailwind} alt="tailwindcss" className='w-30 h-24 hover:animate-blob' />
                    <img src={js} alt="js" className='w-24 h-24 hover:animate-blob' />
                    <img src={react} alt="react" className='w-24 h-24 hover:animate-blob' />
                    <img src={git} alt="git" className='w-24 h-24 hover:animate-blob' />
                    <img src={rest} alt="res" className='w-24 h-24 hover:animate-blob' />
                </div>
            </div>
        </motion.div>
    )
}

export default Skills