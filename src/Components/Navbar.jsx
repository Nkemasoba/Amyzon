import  { useState } from 'react';
import { Menu, Search, ShoppingCart, MapPin, ChevronDown, Globe } from 'lucide-react';
import { subNavLinks } from '../constants'; // Imports the path-bounded array data 


export default function Navigation() {
  const [searchCategory, setSearchCategory] = useState('All');

  return (
    <nav className="w-full flex flex-col font-sans select-none text-white z-50 relative">
      
     
      <div className="bg-[#4c1d95] px-4 py-2 flex items-center justify-between gap-3 lg:gap-4 text-sm h-14">
        
        {/* Brand Brand Logo Link */}
        <a href="/" className="text-xl font-black tracking-tight text-white px-2 py-1.5 border border-transparent hover:border-white rounded cursor-pointer transition-all duration-150 flex-shrink-0 decoration-transparent">
          Amyzon
        </a>

        {/* Dynamic Location Pin Sub-Element */}
        <div className="hidden md:flex items-center px-2 py-1 border border-transparent hover:border-white rounded cursor-pointer text-gray-300 transition-all duration-150">
          <MapPin className="w-5 h-5 text-white mr-1 mt-2.5 flex-shrink-0" />
          <div className="flex flex-col leading-none">
            <span className="text-[11px] text-gray-400 font-normal">Deliver to</span>
            <span className="text-xs font-bold text-white tracking-wide">Cameroon</span>
          </div>
        </div>

        {/* Global Search Bar Assembly Engine */}
        <div className="flex-1 flex items-center bg-white rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-amber-500 transition-all shadow-sm h-10">
          
          {/* Custom Select Box Context */}
          <div className="relative group h-full">
              <button className="bg-[#f3e8ff] text-purple-900 px-3 h-full text-xs font-medium flex items-center gap-1 border-r border-purple-200 hover:bg-[#e9d5ff] hover:text-purple-950 transition duration-150">
              <span>{searchCategory}</span>
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </button>
            <select 
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            >
              <option value="All">All Departments</option>
              <option value="Deals">Deals</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>

          {/* Core Input Text Field */}
          <input 
            type="text" 
            placeholder="Search Amyzon" 
            className="w-full px-3 py-2 text-gray-900 outline-none text-sm placeholder-gray-400 font-medium h-full bg-transparent"
          />

          {/* Search Action Execution Button */}
          <button className="bg-[#febd69] hover:bg-[#f3a847] text-gray-900 px-6 h-full flex items-center justify-center transition-colors duration-150 cursor-pointer">
            <Search className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Action Elements Cluster */}
        <div className="flex items-center space-x-1 sm:space-x-2 text-xs font-bold h-full">
          
          {/* Language Selector Node */}
          <div className="hidden sm:flex items-center gap-1 px-2 py-2 border border-transparent hover:border-white rounded cursor-pointer transition-all duration-150 h-full">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-white tracking-wide">EN</span>
            <ChevronDown className="w-3 h-3 text-gray-400 mt-0.5" />
          </div>
          
          {/* User Sign In Link Section */}
          <a href="/signin" className="flex flex-col justify-center leading-none px-2 py-2 border border-transparent hover:border-white rounded cursor-pointer transition-all duration-150 h-full text-white no-underline">
            <span className="text-[11px] font-normal text-gray-300">Hello, sign in</span>
            <span className="text-xs flex items-center gap-0.5 text-white mt-0.5">
              Account & Lists 
              <ChevronDown className="w-3 h-3 text-gray-400 flex-shrink-0" />
            </span>
          </a>

          {/* Orders/Returns Target Link */}
          <a href="/orders" className="hidden lg:flex flex-col justify-center leading-none px-2 py-2 border border-transparent hover:border-white rounded cursor-pointer transition-all duration-150 h-full text-white no-underline">
            <span className="text-[11px] font-normal text-gray-300">Returns</span>
            <span className="text-xs text-white mt-0.5">& Orders</span>
          </a>

          {/* Interactive Shopping Cart Trigger Link */}
          <a href="/cart" className="flex items-center px-2 py-2 border border-transparent hover:border-white rounded cursor-pointer transition-all duration-150 relative h-full text-white no-underline group">
            <div className="relative flex items-center">
              <ShoppingCart className="w-7 h-7 text-white stroke-[1.8]" />
              <span className="absolute left-[11px] -top-1.5 bg-[#4c1d95] text-[#e9d5ff] font-black text-sm px-1.5 rounded-full min-w-[20px] text-center">
                0
              </span>
            </div>
            <span className="hidden xl:inline-block font-black text-xs text-white mt-3 ml-0.5">Cart</span>
          </a>

        </div>
      </div>

      {/* =========================================================================
          TIER 2: SECONDARY ROW (CATEGORIES SUB-NAV STRIP VIA ROUTING LINKS)
         ========================================================================= */}
      <div className="bg-[#7e22ce] px-4 py-1.5 flex items-center space-x-3 text-xs font-semibold overflow-x-auto whitespace-nowrap scrollbar-none shadow-inner h-9">
        
        {/* Main "All" Categories Dropdown Drawer Link */}
        <a 
          href="/departments" 
          className="flex items-center font-bold px-2 py-1 border border-transparent hover:border-white rounded cursor-pointer transition gap-1 text-white no-underline"
        >
          <Menu className="w-4 h-4 stroke-[2.2]" />
          <span>All</span>
        </a>

        {/* Dynamic Mapping loop populating real links from index.jsx */}
        {subNavLinks.map((link) => (
          <a 
            key={link.id} 
            href={link.href}
            className="px-2 py-1 border border-transparent hover:border-white rounded cursor-pointer text-gray-200 hover:text-white transition duration-150 tracking-wide font-medium no-underline"
          >
            {link.label}
          </a>
        ))}
      </div>

    </nav>
  );
}
