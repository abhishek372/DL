import React from 'react'
import JoinButton from './JoinButton'

const waitlistSection = () => {

  return (
    <>
        <div className='font-poppins p-8 bg-gray-900 overflow-hidden' >
            <h1 className='text-[2.5rem] text-white font-bold text-center py-[0.75em] md:py-[0.75em] md:text-5xl'>
                Be part of our vibrant <span className='text-[#00bf61]'>team</span>
            </h1>
            <div id='text-section' className='flex flex-col justify-center gap-8 items-center pb-8 lg:gap-12'>
                <p className='md:w-[50em] text-gray-400 text-center text-base px-4 md:px-12 lg:px-24 md:text-md lg:text-lg'>
                    Embark on a remarkable journey through the futuristic world of Web 3, blockchain, and decentralized apps. 
                    This is your chance to leave your mark on the digital landscape.
                </p>
                <JoinButton />
                {/* <button onClick={onClick} 
                    className='rounded-md border-[1px] bg-transparent text-white text-[1em] px-8 py-2 sm:text-[1.25rem] lg:text-[1.5rem] font-bold sm:px-6 transition ease-in-out delay-125 hover:border-[1px] hover:text-gray-800 hover:bg-[#fff] hover:scale-110 duration-300'>
                   Join Now
                </button> */}
            </div>
        </div>
    </>
  )
}

export default waitlistSection
