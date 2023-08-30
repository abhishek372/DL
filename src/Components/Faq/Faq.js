import React from "react";
import Question from "./question";

export default function Faq() {

  return (
    <>
        <div className='font-poppins p-8'>
            <h1 className='text-[2.5rem] leading-none text-gray-700 font-bold text-center pt-[0.5em] md:text-5xl'>
                Have Questions ?
            </h1>
            <h2 className="pb-8 pt-2 text-[1em] text-gray-500 font-medium italic text-center md:text-xl">
                Got you Covered
            </h2>
            <div className="flex flex-col gap-4 pb-10">
                <Question 
                    title = "What exactly is web3 technology ?" 
                    answer = "Web3 technology refers to the next evolution of the internet, characterized by decentralized, user-centric, and peer-to-peer interactions.It aims to create a more open, transparent, and user-centric online ecosystem by using blockchain technology and decentralized protocols to empower individuals and enhance digital interactions." 
                />
                <Question 
                    title = "How is it different from web2 ?" 
                    answer = "Web3 includes decentralized platforms, empowers users, peer-to-peer interactions , user-controlled data and assets, blockchain and smart contracts which is not available in web2." 
                />
                <Question 
                    title = "Why should I transition from web2 to web3 ?" 
                    answer = "You can own and control your data, have enhanced data privacy and security, resistance to censorship, can build trustless transactions and agreements, can access globallly and also reduces corporate monopoly power."
                />
                <Question 
                    title = "What benefits does it offer for startups?"
                    answer = "For startups, it can provide features like decentralised fundraising options, access to worlwide audience, oppurtunities for innovation, enhancing ownership and liquidity, secure and verifiable identities, participation in decentralized finance, user-controlled data monetization, engaged communities through incentives and many more. "
                />
                <Question 
                    title = "How can Dapplink support my journey into web3, whether I'm a student or an established professional?"
                    answer = "For students, we can help them to learn about web3, explore and create web3 projects and can connect with mentors and peers. And for professionals, they can upskill with workshops and courses, partner on web3 projects, get consultation and support, contribute to web3 development."
                />
            </div>
        </div>
    </>
  );
}
