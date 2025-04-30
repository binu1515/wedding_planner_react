import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { plannerService } from '@/services/plannerService';

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import PlannerCard from '@/components/PlannerCard';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const { data: planners, isLoading } = useQuery({
    queryKey: ['featuredPlanners'],
    queryFn: () => plannerService.getWeddingPlanners(),
  });

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center font-semibold text-wedding-navy mb-2">
            Featured Wedding Planners
          </h2>
          <div className="w-24 h-1 mx-auto bg-wedding-gold mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              // Loading skeletons
              Array(3).fill(0).map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-lg h-80 animate-pulse"></div>
              ))
            ) : (
              planners?.slice(0, 3).map(planner => (
                <PlannerCard key={planner.id} planner={planner} />
              ))
            )}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/planners">
              <Button className="bg-wedding-gold hover:bg-wedding-navy text-white font-medium px-8">
                View All Wedding Planners
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-wedding-lightGold">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-wedding-navy mb-6">
                Are You a Wedding Planner?
              </h2>
              <p className="text-lg mb-8 text-gray-700">
                Join our community of top wedding planners. Showcase your portfolio, connect with couples, and grow your business.
              </p>
              <Link to="/planner/register">
                <Button className="bg-wedding-navy hover:bg-wedding-gold text-white font-medium px-8">
                  Register Now
                </Button>
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1470" 
                alt="Wedding planner working" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center font-semibold text-wedding-navy mb-2">
            How It Works
          </h2>
          <div className="w-24 h-1 mx-auto bg-wedding-gold mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-wedding-blush rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <span className="text-2xl font-serif text-wedding-navy">1</span>
              </div>
              <h3 className="text-xl font-serif text-wedding-navy mb-3">Search Nearby</h3>
              <p className="text-gray-700">
                Enter your location to find wedding planners in your area.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-wedding-blush rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <span className="text-2xl font-serif text-wedding-navy">2</span>
              </div>
              <h3 className="text-xl font-serif text-wedding-navy mb-3">Compare Portfolios</h3>
              <p className="text-gray-700">
                Browse profiles, reviews, and past events to find your perfect match.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-wedding-blush rounded-full w-20 h-20 flex items-center justify-center mb-6">
                <span className="text-2xl font-serif text-wedding-navy">3</span>
              </div>
              <h3 className="text-xl font-serif text-wedding-navy mb-3">Connect Directly</h3>
              <p className="text-gray-700">
                Reach out to planners and start planning your dream wedding.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;