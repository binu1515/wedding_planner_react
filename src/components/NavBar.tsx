import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-wedding-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-wedding-navy font-serif text-2xl font-bold">WeddingPlanner<span className="text-wedding-gold">Connect</span></span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-wedding-navy hover:text-wedding-gold transition-colors">
            Home
          </Link>
          <Link to="/planners" className="text-wedding-navy hover:text-wedding-gold transition-colors">
            Find Planners
          </Link>
          <Link to="/about" className="text-wedding-navy hover:text-wedding-gold transition-colors">
            About
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/planner/login">
            <Button variant="outline" className="border-wedding-gold text-wedding-navy hover:bg-wedding-lightGold">
              Login
            </Button>
          </Link>
          <Link to="/planner/register">
            <Button className="bg-wedding-gold hover:bg-wedding-navy text-white">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;