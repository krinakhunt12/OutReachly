
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  // Minimal header for the guided dashboard to avoid navigation noise
  if (location.pathname === '/dashboard') {
    return (
      <nav className="flex items-center justify-center px-6 py-4 border-b border-gray-200 bg-transparent z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">O</span>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-800 sticky top-0 bg-gray-950/95 backdrop-blur-sm z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">O</span>
        </div>
        <h1 className="text-xl font-bold text-white">OutReachly</h1>
      </div>
      
      <div className="hidden md:flex items-center gap-6">
        <Link to="/how" className="text-gray-400 hover:text-white transition">How It Works</Link>
        <Link to="/benefits" className="text-gray-400 hover:text-white transition">Benefits</Link>
        <Link to="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <Link to="/login" className="text-gray-400 hover:text-white transition">Login</Link>
        <Link to="/register" className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
