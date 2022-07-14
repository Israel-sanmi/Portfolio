import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Form = () => {
    const [done, setDone] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nz9z9lu', 'template_mxrl2lp', form.current, '1cFyqBl2azMs8pWka')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className=''>
            <form ref={form} onSubmit={sendEmail} className='p-2'>
                <input type="text" name="user_name" placeholder='Your name' className='p-2 md:indent-4 indent-0 md:w-1/3 w-full border md:mx-6 mb-1 border-indigo-700 text-sm placeholder-indigo-700'/>
                <input type="email" name="user_email" placeholder='E-mail' className='p-2 md:indent-4 indent-0 md:w-1/3 w-full border mb-1 border-indigo-700 text-sm placeholder-indigo-700'/><br />
                <textarea name="message" placeholder='Your Message' className='md:w-[857px] w-full p-2 md:indent-4 indent-0 border border-indigo-700 md:m-6 mb-1 text-sm placeholder-indigo-700'/><br />
                <input type="submit" value="Send" className='bg-indigo-700 cursor-pointer text-white py-2 md:w-24 w-full md:ml-6 my-5 px-7 md:rounded-lg rounded-none uppercase text-center'/>
                <span className='text-indigo-700'>{done && "Thanks for contacting me!"}</span>
            </form>
        </div>
    )
}

export default Form