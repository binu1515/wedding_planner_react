import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-wedding-navy text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">WeddingPlanner<span className="text-wedding-gold">Connect</span></h3>
            <p className="text-sm opacity-70 mb-4">
              Connecting couples with their perfect wedding planner since 2023.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-70 hover:opacity-100 hover:text-wedding-gold transition-all">Home</Link></li>
              <li><Link to="/planners" className="text-sm opacity-70 hover:opacity-100 hover:text-wedding-gold transition-all">Find Planners</Link></li>
              <li><Link to="/about" className="text-sm opacity-70 hover:opacity-100 hover:text-wedding-gold transition-all">About</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">For Planners</h4>
            <ul className="space-y-2">
              <li><Link to="/planner/register" className="text-sm opacity-70 hover:opacity-100 hover:text-wedding-gold transition-all">Register</Link></li>
              <li><Link to="/planner/login" className="text-sm opacity-70 hover:opacity-100 hover:text-wedding-gold transition-all">Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-4">Contact</h4>
            <p className="text-sm opacity-70 mb-2">
              Email: info@wumple.com
            </p>
            <p className="text-sm opacity-70">
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm opacity-70">
          <p>© {new Date().getFullYear()} Wumple. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;