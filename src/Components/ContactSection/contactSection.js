import React from 'react';
import LinkedinIcon from '../../assets/Social_Icons/linkedin.png';
import TwitterIcon from '../../assets/Social_Icons/twitter.png';
import TelegramIcon from '../../assets/Social_Icons/telegram.png';


const contactSection = () => {

  const iconStyle = `w-[2.5em] h-[2.5em] sm:w-[3em] sm:h-[3em]`;
  
  return (
    <>
        <div className='font-poppins p-8 bg-gray-900'>
            <h1 className='text-[1.5rem] text-white font-bold text-center py-[1em] md:py-[0.75em] md:text-3xl'>Need help? Reach us On</h1>
            <div className=' mx-auto sm:w-full flex flex-wrap justify-center items-center gap-8 sm:gap-[3rem] py-2'>
              <a href='https://in.linkedin.com/company/dapplink?trk=public_post_follow-view-profile'><img src={LinkedinIcon} className={iconStyle} alt='linkedin'/></a>
              <a href='https://twitter.com/dapplink27065?t=35Di-DvrEzilMMcGcrTreA&s=09'><img src={TwitterIcon} className={iconStyle} alt='twitter'/></a>
              <a href='https://t.me/dapp_link'><img src={TelegramIcon} className={iconStyle} alt='telegram'/></a>
            </div>
        </div>
    </>
  )
}

export default contactSection
