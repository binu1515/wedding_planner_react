import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { plannerService } from '@/services/plannerService';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

import { Loader2, MapPin, Mail, Phone, Instagram, Facebook, Globe } from 'lucide-react';

const PlannerDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: planner, isLoading, error } = useQuery({
    queryKey: ['planner', id],
    queryFn: () => plannerService.getWeddingPlannerById(id || ''),
    enabled: !!id,
  });
  
  if (isLoading) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-wedding-gold mb-4" />
          <p className="text-xl">Loading planner details...</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (error || !planner) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-serif mb-4">Wedding Planner Not Found</h2>
          <p className="mb-8">Sorry, we couldn't find the wedding planner you're looking for.</p>
          <Link to="/planners">
            <Button className="bg-wedding-gold hover:bg-wedding-navy text-white">
              View All Wedding Planners
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Cover Image */}
      <div 
        className="h-64 md:h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${planner.coverImage || 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1470'})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 h-full flex items-end pb-8 relative z-10">
          <div className="flex items-center">
            <div className="h-24 w-24 md:h-32 md:w-32 rounded-full border-4 border-white overflow-hidden mr-6">
              <img 
                src={planner.profileImage || 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1488'} 
                alt={planner.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-serif font-semibold text-white">
                {planner.name}
              </h1>
              <div className="flex items-center mt-2">
                <MapPin className="h-4 w-4 text-wedding-gold mr-1" />
                <span className="text-white">{planner.location}</span>
                {planner.rating && (
                  <>
                    <span className="mx-2 text-white">•</span>
                    <span className="text-wedding-gold">★</span>
                    <span className="text-white ml-1">{planner.rating}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                <TabsTrigger value="services">Services</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-serif text-wedding-navy mb-6">About {planner.name}</h2>
                  <p className="text-gray-700 mb-6">
                    {planner.about || planner.description}
                  </p>
                  
                  <h3 className="text-xl font-serif text-wedding-navy mb-4">Specialties</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {planner.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="bg-wedding-blush/20 text-gray-700 border-wedding-blush">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="portfolio">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-serif text-wedding-navy mb-6">Portfolio</h2>
                  
                  {planner.events && planner.events.length > 0 ? (
                    <div className="grid grid-cols-1 gap-8">
                      {planner.events.map((event) => (
                        <Card key={event.id} className="overflow-hidden">
                          <div className="h-64 overflow-hidden">
                            <img 
                              src={event.image} 
                              alt={event.title} 
                              className="w-full h-full object-cover transition-transform hover:scale-105"
                            />
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-serif text-wedding-navy mb-2">{event.title}</h3>
                            {event.description && (
                              <p className="text-gray-700">{event.description}</p>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No portfolio events available.</p>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="services">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-serif text-wedding-navy mb-6">Services Offered</h2>
                  
                  {planner.services && planner.services.length > 0 ? (
                    <div className="space-y-6">
                      {planner.services.map((service) => (
                        <div key={service.id} className="border-b border-gray-100 pb-6 last:border-0">
                          <div className="flex justify-between mb-2">
                            <h3 className="text-lg font-serif text-wedding-navy">{service.name}</h3>
                            {service.price && (
                              <span className="text-wedding-gold font-medium">{service.price}</span>
                            )}
                          </div>
                          <p className="text-gray-700">{service.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No services information available.</p>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Contact Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-6">
              <h2 className="text-xl font-serif text-wedding-navy mb-4">Contact Information</h2>
              
              <div className="space-y-4 mb-6">
                {planner.contactEmail && (
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-wedding-gold mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${planner.contactEmail}`} className="text-wedding-navy hover:text-wedding-gold">
                        {planner.contactEmail}
                      </a>
                    </div>
                  </div>
                )}
                
                {planner.contactPhone && (
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-wedding-gold mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href={`tel:${planner.contactPhone}`} className="text-wedding-navy hover:text-wedding-gold">
                        {planner.contactPhone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              
              {planner.socialMedia && Object.values(planner.socialMedia).some(value => value) && (
                <>
                  <Separator className="my-6" />
                
                  <h3 className="text-lg font-serif text-wedding-navy mb-4">Social Media</h3>
                  
                  <div className="flex gap-4">
                    {planner.socialMedia.instagram && (
                      <a href="#" className="text-wedding-navy hover:text-wedding-gold">
                        <Instagram className="h-5 w-5" />
                      </a>
                    )}
                    
                    {planner.socialMedia.facebook && (
                      <a href="#" className="text-wedding-navy hover:text-wedding-gold">
                        <Facebook className="h-5 w-5" />
                      </a>
                    )}
                    
                    {planner.socialMedia.website && (
                      <a href="#" className="text-wedding-navy hover:text-wedding-gold">
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </>
              )}
              
              <Separator className="my-6" />
              
              <Button className="w-full bg-wedding-gold hover:bg-wedding-navy text-white">
                Contact {planner.name.split(' ')[0]}
              </Button>
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

export default PlannerDetail;