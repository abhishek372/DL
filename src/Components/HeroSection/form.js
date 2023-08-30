import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import axios from 'axios';
import { toast } from 'react-toastify';
// const FORM_ENDPOINT = "https://public.herotofu.com/v1/b3c71a30-39e8-11ee-aa48-0d756f031946";


const Form = () => {

    const inputRef = useRef("");
    const [email, setEmail] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    // const [emailSent, setEmailSent] = useState(false);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleEmailBlur = () => {
        setEmailTouched(true);
    };

    const isEmailValid = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    async function sendEmail(e) {
        e.preventDefault();

        await emailjs.sendForm(
            'service_x9oghba', 
            'template_ysao0le',
            '#emailForm', 
            'XyfOasVw0Jb-tRSzM')
            .then((response) =>{
                console.log('SUCCESS!', response.status, response.text);
            }).catch(error => {
                console.log('FAILED...', error);
            });
            inputRef.current.value = "";

            if (isEmailValid){
                setTimeout(async () => {
                    await axios.post('http://localhost:4000/send-email', { to: email });
                    // setEmailSent(true);
                    toast('🦄 Thanks for registering', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                  }, 1000);
                  
            }
    }

  return (
    <>
        <form 
            onSubmit={sendEmail}
            method="post"
            acceptCharset="UTF-8"
            id='emailForm' 
            value = {email}
            className='py-2 sm:py-1 sm:my-2 bg-white rounded-sm w-[16em] sm:w-max mx-auto flex flex-wrap sm:gap-0 justify-center'
        >
            <input
                onChange={handleEmailChange}
                onBlur={handleEmailBlur} 
                ref={inputRef} 
                type='email' 
                name='email' 
                className='w-full sm:w-[15em] text-sm md:text-md rounded-s-sm bg-white p-2 border-none focus:outline-none' 
            />

            <button disabled={!isEmailValid()} type="submit" style={{backgroundImage: 'linear-gradient(to right, #3dff74, #2ce36a, #1cc760, #0dac55, #02914a)',}} 
                className=' rounded-sm w-full sm:w-max text-md md:text-lg text-white mx-1 sm:mr-1 py-1 px-2 md:px-4 hover:bg-green-800 transition-all'
                >
                Join the waitlist
            </button>
        </form>
        {emailTouched && !isEmailValid() && <p className='text-red-500'>Enter a valid email address</p>}
        {/* {emailSent && <p className='text-white'>Thank you! for showing interest.</p>} */}
        {/* <ToastContainer /> */}

    </>
  )
}

export default Form

