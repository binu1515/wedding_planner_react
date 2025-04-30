
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/planners?location=${encodeURIComponent(location)}`);
    }
  };
  
  return (
    <div className="relative h-[80vh] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=2070')]">
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="relative h-full flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-center animate-fadeIn">
          Find Your Perfect Wedding Planner
        </h1>
        <p className="text-lg md:text-xl max-w-2xl text-center mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          Connect with professional wedding planners in your area to create the wedding of your dreams
        </p>
        
        <form onSubmit={handleSearch} className="w-full max-w-md flex flex-col md:flex-row gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <Input
            type="text"
            placeholder="Enter your location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="flex-1 bg-white/90 text-black placeholder:text-gray-500 border-0 focus-visible:ring-wedding-gold"
            required
          />
          <Button 
            type="submit" 
            className="bg-wedding-gold hover:bg-wedding-navy text-white font-medium"
          >
            Find Planners
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Hero;