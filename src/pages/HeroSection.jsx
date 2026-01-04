import React from 'react'
import Arrow from '../assets/svg/arrow.svg'

const HeroSection = () => {
  return (
    <div className='bg-white py-8 '>
        <div className="max-w-7xl mx-auto px-3 lg:px-4 relative right-[1px] grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left side */}
            <div className="flex flex-col space-y-4">
                {/* Top Text Block */}
                <div className="bg-zinc-900 h-[400px] lg:h-[460px] 
                col justify-between rounded-3xl shadow-sm p-8">
                    <h2 className='text-4xl min-w-[400px]:text-5xl md:text-6xl uppercase impact text-white shadow-sm font-black'>
                    FOR <img src={Arrow} alt="arrow img" 
                    className='inline-block w-30 lg:w-40 lg:ml-4 mb-2 lg:mb-5' /><br/> 
                    EVERYONE <br/>
                    BUT <br/> NOT ANYONE</h2>
                    <p className="text-zinc-300">
                        We establish perosnal realtionships with our boutiques, to make
                        Sure each is vetted for a stress-free shopping experience
                    </p>
                </div>
                {/* Bottom Small Image Grid*/}
                <div className="grid grid-cols-2 gap-4">
                    {/* 1 */}
                    <div className="relative h-[230px] bg-zinc-300 rounded-3xl flex items-end top-3 p-3 overflow-clip">
                        <div className="absolute inset-0 bg-[url(/src/assets/images/port-1.png)] bg-cover bg-center "></div>
                        <span className="bg-zinc-900/70 backdrop-blur-sm text-white font-semibold tracking-wide 
                        z-20 px-2 py-1 rounded-full ">#RIPSTOP</span>
                </div>
                    {/* 2 */}
                    <div className="relative h-[230px] bg-[#586D64] rounded-3xl flex items-end p-3 top-2 overflow-clip">
                        <div className="absolute inset-0 bg-[url(/src/assets/images/port-2.png)] bg-cover bg-center "></div>
                        <span className="bg-zinc-900/70 backdrop-blur-sm text-white font-semibold tracking-wide 
                        z-20 px-2 py-1 rounded-full">#INSULATED</span>
                </div>
            </div>
            {/* Right Side */}
            <div className="relative hidden lg:inline-flex bg-zinc-300 rounded-3xl overflow-hidden">
                {/* Image PLaceholder */}
                <div className="w-full h-full flex items-center justify-center text-zinc-500">Image Place Holder</div>
                {/* ShopNow Floating Button */}
                <div className="absolute bottom-80 right-45 size-20 center-item bg-zinc-800/80 backdrop-blur-md 
                text-zinc-50 uppercase rounded-b-full border border-zinc-100">ghop <br/> NOw</div>

            </div>
            {/* Mobile  Version Shopn now button */}
            <div className="w-full sm:hidden  bg-[#586b3f] text-white relative p-3 top-6 uppercase center-item rounded-full">SHOP NOW</div>
        </div>
    </div>
    </div>
  )
}

export default HeroSection