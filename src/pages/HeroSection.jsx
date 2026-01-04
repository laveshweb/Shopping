import React from 'react'
import Arrow from '../assets/svg/arrow.svg'

const HeroSection = () => {
  return (
    <div className='bg-white py-12 '>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left side */}
            <div className="flex flex-col space-y-4">
                {/* Top Text Block */}
                <div className="bg-zinc-900 h-[480px] 
                col justify-between rounded-3xl shadow-sm p-8">
                    <h2 className='text-5xl md:text-6xl uppercase impact text-white shadow-sm'>FOR <img src={Arrow} alt="arrow img" 
                    className='inline-block w-40 ml-5 ' /><br/> 
                    EVERYONE <br/>
                    BUT <br/> NOT ANYONE</h2>
                    <p className="text-zinc-300">
                        We establish perosnal realtionships with our boutiques, to make
                        SUre each is vetted for a stress-free shopping experience
                    </p>
                </div>
                {/* Bottom Small Image */}
                <div className=""></div>
            </div>
            {/* Right Side */}
            {/* Mobile  Version Shopn now button */}
        </div>
    </div>
  )
}

export default HeroSection