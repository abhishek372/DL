import React from 'react';
import { TiTick } from "react-icons/ti";

const Features = () => {
    const iconStyle = `w-max pr-2 text-[2.25rem] sm:text-[1.5rem] `;

  return (
    <>
        <div className='font-poppins p-8 bg-[#cfe9ff]'>
            <h1 className='text-[2.5rem] leading-none text-gray-700 font-bold text-center py-[0.75em] md:py-[0.75em] md:text-5xl'>Features <span className='text-[#00bf61]'>&</span> Services</h1>
            <div id='text-section' className='flex justify-center items-center pb-8'>
                <ul className='md:w-[50em] text-gray-600 text-base px-4 md:px-6 lg:px-[3em] md:text-md lg:text-lg'>
                    <li className='flex items-start text-left'><TiTick className={iconStyle}/> Early access to webinars and workshops led by industry experts.</li>
                    <li className='flex items-start pt-3 text-left'><TiTick className={iconStyle}/> Curated content to keep you updated on the latest trends and breakthroughs.</li>
                    <li className='flex items-start py-3 text-left'><TiTick className={iconStyle}/>Networking events to connect with fellow enthusiasts and potential collaborators.</li>
                    <li className='flex items-start text-left'><TiTick className={iconStyle}/>Exclusive resources that empower you to drive innovation in the web3, blockchain, and AI realms.</li>
                </ul>
            </div>
        </div> 
    </>
  )
}

export default Features
