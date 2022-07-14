import React from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, UserIcon, CodeIcon, BriefcaseIcon, PhoneIcon, ArrowsExpandIcon } from '@heroicons/react/solid'




const NavBar = () => {
    return (
        <div className='fixed flex flex-col top-0 left-0 h-screen md:w-24 w-20 m-0 bg-indigo-700 shadow-md text-white'>
            <div className='uppercase font-bold bg-indigo-800 text-center py-8 text-sm'>
                <span><ArrowsExpandIcon className=' md:hidden block' /></span>
                <a href="/"><p className='hidden md:block cursor-pointer'>Ilesanmi Protfolio</p></a>

            </div>
            <div className=' flex flex-col items-center'>
                <Link to="/"><HomeIcon className='w-8 h-8 my-8 cursor-pointer mx-auto shadow-lg hover:text-slate-200 hover:bg-indigo-600 rounded-3xl hover:rounded-xl active:bg-red-500 transition-all duration-200 ease-linear' /></Link>
                <Link to="about"><UserIcon className='w-8 h-8 my-8 cursor-pointer mx-auto shadow-lg hover:text-slate-200 hover:bg-indigo-600 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear' /></Link>
                <Link to="skills"><CodeIcon className='w-8 h-8 my-8 cursor-pointer mx-auto shadow-lg hover:text-slate-200 hover:bg-indigo-600 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear' /></Link>
                <Link to="work"><BriefcaseIcon className='w-8 h-8 my-8 cursor-pointer mx-auto shadow-lg hover:text-slate-200 hover:bg-indigo-600 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear' /></Link>
                <Link to="contact"><PhoneIcon className='w-8 h-8 my-8 cursor-pointer mx-auto shadow-lg hover:text-slate-200 hover:bg-indigo-600 rounded-3xl hover:rounded-xl transition-all duration-200 ease-linear' /></Link>
            </div>
        </div>
    )
}

export default NavBar