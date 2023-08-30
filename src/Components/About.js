import React from 'react'

const About = () => {
  return (
    <>
        <div className='font-poppins p-8 bg-gray-900'>
            <h1 className="text-[2.5rem] text-white leading-none font-bold text-center py-[0.75em] md:py-[0.75em] md:text-5xl">What we do</h1>
            <div id='text-section' className='flex justify-center items-center pb-[1em] sm:pb-[1em]'>
                <p className='md:w-[50em] text-gray-400 text-center text-base px-4 pb-4 md:px-6 md:pb-8 lg:px-[3em] md:text-md lg:text-lg'>
                    At <span className='font-bold text-[1.25rem] text-transparent bg-clip-text bg-gradient-to-r from-[#2ce3fc] via-[#00fbb8] to-[#00bf61]'>Dapplink</span> 
                    , we offer you the gateway to an exclusive community of forward-thinking individuals. By joining us, you'll access a world of curated insights, cutting-edge resources, interactive workshops, and collaborative opportunities that will fuel your expertise and creativity.
                </p>
            </div>
        </div> 
    </>
  )
}

export default About
