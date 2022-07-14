import { DownloadIcon } from '@heroicons/react/solid'
import React from 'react'
import Israel from '../../Assets/Israel.png'
import Resume from "../../Assets/Adetomokun Israel's Resume.pdf"
import { motion } from 'framer-motion'



const HeroPage = () => {
    return (
        <motion.div className='flex justify-center items-center h-screen bg-slate-100 md:ml-24 ml-20'
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0, transition:{duration:0.4}}}
        >
            <div className='md:flex block items-center gap-4'>
                <div className='h-60 md:w-60 w-full my-4 rounded-sm bg-gray-100 flex justify-center'>
                    <img src={Israel} alt="Israel's image" className='' />
                </div>
                <div className='text-center md:text-left'>
                    <h1>
                        Hi There! I'm <br /> <span className='text-indigo-700 md:text-4xl text-2xl font-bold'>Israel Ilesanmi</span>
                        <p className='text-gray-600 text-center md:text-left'>A Front-End Web Developer passionate about creating interactive applications <br /> and experiences on the web.</p>
                        <a href={Resume} download="Israel's Resume" className='animate-pulse hover:ring-2 flex my-3 items-center gap-2 bg-indigo-600 md:w-1/5 w-full justify-center md:rounded-lg rounded-none p-2 text-white'>Resume <DownloadIcon className='h-5 w-5 animate-bounce' /></a>
                        <div className='mt-2'>
                            <a className='text-sm text-white bg-blue-600 p-2 rounded-lg transition-all duration-300 hover:bg-blue-800 ' href="https://www.linkedin.com/in/israelsanmi">LinkedIn</a>
                            <a className='text-sm px-4 text-white bg-gray-800 p-2 rounded-lg mx-1 transition-all duration-300 hover:bg-black-900' href="https://github.com/Israel-sanmi">Github</a>
                            <a className='text-sm px-4 text-white bg-green-600 p-2 rounded-lg mx-1 transition-all duration-300 hover:bg-green-800' href="https://wa.link/4yj119">Whatsapp</a>
                        </div>
                    </h1>
                </div>
            </div>
        </motion.div>
    )
}

export default HeroPage