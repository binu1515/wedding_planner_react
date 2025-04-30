
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="bg-wedding-navy text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            About WeddingPlanner Connect
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Connecting couples with their perfect wedding planners since 2023
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-serif text-wedding-navy mb-6">Our Mission</h2>
          <p className="text-gray-700 mb-10 text-lg">
            At WeddingPlanner Connect, we believe that every couple deserves the wedding of their dreams. 
            Our mission is to simplify the process of finding the perfect wedding planner by connecting 
            couples with talented professionals in their area. We're passionate about making wedding 
            planning less stressful and more enjoyable for everyone involved.
          </p>
          
          <Separator className="my-10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-serif text-wedding-navy mb-4">For Couples</h2>
              <p className="text-gray-700 mb-4">
                Planning a wedding should be as magical as the day itself. We provide an easy way to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Find wedding planners near your location</li>
                <li>Browse detailed portfolios of past events</li>
                <li>Compare services and specialties</li>
                <li>Connect directly with planners who match your style</li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=2070" 
                alt="Happy couple" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1470" 
                alt="Wedding planner working" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-serif text-wedding-navy mb-4">For Wedding Planners</h2>
              <p className="text-gray-700 mb-4">
                We help talented wedding planners showcase their work and connect with couples who appreciate their unique style:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Create a beautiful portfolio to showcase your work</li>
                <li>Connect with couples in your area</li>
                <li>Highlight your specialties and services</li>
                <li>Grow your business through our platform</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-10" />
          
          <h2 className="text-2xl font-serif text-wedding-navy mb-6 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-wedding-lightGold/50 p-6 rounded-lg">
              <h3 className="text-xl font-serif text-wedding-navy mb-3">Quality</h3>
              <p className="text-gray-700">
                We carefully vet all wedding planners on our platform to ensure the highest standards of professionalism and service.
              </p>
            </div>
            <div className="bg-wedding-blush/50 p-6 rounded-lg">
              <h3 className="text-xl font-serif text-wedding-navy mb-3">Diversity</h3>
              <p className="text-gray-700">
                We celebrate planners with different styles, approaches, and specialties to help every couple find their perfect match.
              </p>
            </div>
            <div className="bg-wedding-lightGold/50 p-6 rounded-lg">
              <h3 className="text-xl font-serif text-wedding-navy mb-3">Transparency</h3>
              <p className="text-gray-700">
                We believe in honest reviews, clear service descriptions, and transparent pricing to build trust.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default About;