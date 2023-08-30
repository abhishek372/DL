import React from 'react';
import Hero from './HeroSection/Hero';
import IntroSection from './IntroSection';
import About from './About';
import Features from './Features';
import WaitlistSection from './waitlistSection';
import QuoteSection from './quoteSection';
import Faq from './Faq/Faq';
import ContactSection from './ContactSection/contactSection';
import Footer from './footer';


const LaunchPage = () => {

  return (
    <>  
        <Hero/>
        <IntroSection />
        <About />
        <Features />
        <WaitlistSection />
        <QuoteSection />
        <Faq />
        <ContactSection />
        <Footer />
    </>
  )
}

export default LaunchPage
