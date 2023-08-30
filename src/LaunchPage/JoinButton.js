import React from 'react'

const JoinButton = () => {
  return (
    <div>
        <button 
			className='rounded-md border-[1px] bg-transparent text-white text-[1em] px-8 py-2 sm:text-[1.25rem] lg:text-[1.5rem] font-medium sm:px-6 transition ease-in-out transform hover:border-[0.5px] hover:text-gray-800 hover:bg-[#fff] hover:scale-105 duration-500'>
			<a href="https://google.com" target='blank' rel="noopener noreferrer" className='w-full'>
				Join Now
			</a>
        </button>
    </div>
  )
}

export default JoinButton
