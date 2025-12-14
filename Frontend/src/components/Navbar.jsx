
import { useState } from 'react';

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800 sticky top-0 bg-gray-950/95 backdrop-blur-sm z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">O</span>
        </div>
        <h1 className="text-xl font-bold">OutReachly</h1>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <a href="#how" className="text-gray-400 hover:text-white transition">How It Works</a>
        <a href="#benefits" className="text-gray-400 hover:text-white transition">Benefits</a>
        <a href="#pricing" className="text-gray-400 hover:text-white transition">Pricing</a>
      </div>
      
      <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
        Get Early Access
      </button>
    </nav>
  );
}

export default Navbar;
