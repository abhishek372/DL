import React from 'react'
import Logo from '../../assets/logo/logo_darkbg.png';
import './hero.css';
// import Logo from '../../assets/logo/logo_icon.png';
// import JoinButton from '../JoinButton';
// import Logo from '../assets/logo/applink_darkbg.png';
//import Logo from '../assets/logo/logo.png';
// import Form from './form';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {

    const fontStyle = {
        backgroundImage: 'linear-gradient(to right, #2ce3fc, #00ebf4, #00f1e6, #00f7d2, #00fbb8, #2af7a7, #3ff395, #51ef83, #43e37a, #34d772, #21cb69, #00bf61)',
    }

  return (
    <>
        <div className='w-full relative overflow-hidden bg-black font-poppins z-10'>     
            {/* <ToastContainer /> */}
            <div className='circle'></div> 
            <div className='circle-sm'></div> 
            <div className='circle-md'></div> 
            <div id='navbar' className=' w-full pt-4 flex justify-center sm:pl-4 sm:justify-start'>
                <img alt="DappLink" src={Logo} className='w-[6em] sm:w-[8em] sm:h-[6em] lg:w-[10em] lg:h-[7em]'/>
            </div>    
            <div id='main-content' className='relative z-[999] w-full pt-[3em] pb-[3.5em] sm:pt-[3.5em] sm:pb-[4em] lg:pt-[4em] lg:pb-[4.5em] flex flex-col justify-center'>
                <div className='heading py-[2em] sm:py-0 flex flex-col flex-wrap justify-center items-center'>
                    <h1 style={fontStyle} 
                        className='font-rubik text-center text-6xl py-[1rem] sm:py-6 text-transparent sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text selection:text-white'>
                            Link with DappLink
                    </h1>
                    <p className='text-sm text-center text-white py-2 sm:text-lg md:text-xl md:py-3 selection:text-black'>
                        Unleash the Power of Web3 Technology
                        <br/>
                        Join Our Community of Tech Enthusiasts
                    </p>
                </div>
                <div className='py-4'>
                    
                        <button 
                            className='rounded-none border-[1px] bg-transparent text-white text-[1em] px-8 py-2 sm:text-[1.25rem] font-medium sm:px-8 transition ease-in-out transform hover:rounded-md hover:border-[0.5px] hover:text-gray-800 hover:bg-[#fff] hover:scale-105 duration-500'>
                            <a href="https://form.jotform.com/232391491442051" target='blank' rel="noopener noreferrer" className='w-full'>
                                Join Now
                            </a>
                        </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
