import { Search, ShoppingBagIcon, ShoppingCart, User , Menu} from 'lucide-react'
import React from 'react'
import {navLinksData} from '../assets/data'

// const activeLinkClasses = "border-zinc-900 font-bold"
const Header = () => {
  return (
    <div className='w-full'>
      {/* Announcement Bar */}
      <div className="bg-zinc-900 text-white text-center text-[12px] lg:text-[13px] py-2">
        Sign up and get 20% off for all new-season collections
      </div>
      {/* Main Navbar */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-[20px] sm:px-[28px] flex justify-between 
        items-center border border-zinc-300 rounded-4xl p-4">
          {/* Logo */}
             <div className="flex items-center justify-between gap-2 min-w-0 ">
              {/* Icon */}
             <ShoppingBagIcon className='w-5 h-5 sm:block hidden sm:h-6 md:w-7 md:h-7'/>
              {/* Text */}
              <div className=" font-bold impact tracking-tight text-zinc-900   text-lg sm:text-xl md:text-2xl">PUREMODA <sup>® </sup></div>
             </div>
          {/* Nav */}
            <div className="hidden md:flex space-x-4 text-sm font-medium text-zinc-900">
              {
                navLinksData.map((link) => (
                  <a key={link.name} href="#" className={`hover:text-zinc-900  hover:-translate-y-1 hover:scale-110
                    duration-200 transition-all border border-transparent hover:border-zinc-400 p-2 rounded-full ${
                    link.isActive
                  }`}>
                    {link.name}
                  </a>
                ))
              }
            </div>
          {/* Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button className="text-zinc-700 hover:text-zinc-900 transition-colors">
                <Search size={20} />
              </button>
              <button className="text-zinc-700 hover:text-zinc-900 transition-colors relative">
                <User size={22} />
              </button>
              <button className="text-zinc-700 hover:text-zinc-900 transition-colors relative">
                <ShoppingCart size={22} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white 
                text-[10px] rounded-full size-4 center-item ">0</span>
              </button>
              {/* //Mobile */}
              <button className="md:hidden text-zinc-700"><Menu size={20} /></button>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Header