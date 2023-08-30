import React from 'react'

const IntroSection = () => {
  return (
    <>
        <div className='font-poppins p-8 bg-[#DAF5FF] relative'>
            <h1 className='text-[2.5rem] leading-none text-gray-700 font-bold text-center py-[0.75em] md:py-[0.75em] md:text-5xl'>Welcome to the <span className='text-[#00bf61]'>Community</span></h1>
            <div id='text-section' className='flex justify-center items-center'>
                <p className='md:w-[50em] text-gray-600 text-center text-base px-4 pb-4 md:px-6 md:pb-8 lg:px-[3em] md:text-md lg:text-lg'>
                    Welcome to Dapplink, a vibrant community dedicated to exploring the revolutionary world of Web3 technology, blockchain, and AI. 
                    If you're passionate about staying at the forefront of technological innovation and connecting with like-minded visionaries, you've come to the right place.
                </p>
            </div>
        </div> 

    </>
  )
}

export default IntroSection
