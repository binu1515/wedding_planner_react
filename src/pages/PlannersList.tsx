import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { plannerService } from '@/services/plannerService';
import { PlannerFilters } from '@/types/planner';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PlannerCard from '@/components/PlannerCard';
import LocationInput from '@/components/LocationInput';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlannersList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialLocation = searchParams.get('location') || '';
  
  const [filters, setFilters] = useState<PlannerFilters>({
    location: initialLocation || undefined,
    maxDistance: 50,
    minRating: 0,
    specialties: [],
  });
  
  // Get all specialties for the filter
  const { data: allSpecialties = [] } = useQuery({
    queryKey: ['specialties'],
    queryFn: () => plannerService.getSpecialties()
  });
  
  // Get planners based on filters
  const { data: planners = [], isLoading, refetch } = useQuery({
    queryKey: ['planners', filters],
    queryFn: () => plannerService.getWeddingPlanners(filters),
    enabled: !!filters.latitude || !!filters.location,
  });
  
  // Handle location selection
  const handleLocationSelect = (latitude: number, longitude: number, locationName: string) => {
    setFilters(prev => ({
      ...prev,
      latitude,
      longitude,
      location: locationName
    }));
    
    // Update URL params
    setSearchParams(params => {
      params.set('location', locationName);
      return params;
    });
  };
  
  // Handle specialty filter change
  const handleSpecialtyChange = (specialty: string, checked: boolean) => {
    setFilters(prev => {
      const currentSpecialties = prev.specialties || [];
      
      if (checked) {
        return { ...prev, specialties: [...currentSpecialties, specialty] };
      } else {
        return { 
          ...prev, 
          specialties: currentSpecialties.filter(s => s !== specialty)
        };
      }
    });
  };
  
  // Set default filters if location is provided in URL
  useEffect(() => {
    if (initialLocation && !filters.latitude) {
      // Simulate geocoding the location
      fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(initialLocation)}&format=json&limit=1`)
        .then(response => response.json())
        .then(data => {
          if (data && data.length > 0) {
            const { lat, lon } = data[0];
            setFilters(prev => ({
              ...prev,
              latitude: Number(lat),
              longitude: Number(lon),
              location: initialLocation
            }));
          }
        })
        .catch(error => {
          console.error("Error geocoding address:", error);
        });
    }
  }, [initialLocation]);
  
  const handleResetFilters = () => {
    setFilters({
      location: filters.location,
      latitude: filters.latitude,
      longitude: filters.longitude,
      maxDistance: 50,
      minRating: 0,
      specialties: [],
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="bg-wedding-navy text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif text-center font-semibold mb-6">
            Find Your Perfect Wedding Planner
          </h1>
          <div className="max-w-xl mx-auto">
            <LocationInput 
              onLocationSelect={handleLocationSelect}
              initialLocation={filters.location}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-fit">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-serif text-wedding-navy">Filters</h2>
              <Button 
                variant="ghost" 
                onClick={handleResetFilters}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Reset
              </Button>
            </div>
            
            <div className="mb-6">
              <Label className="text-sm font-medium mb-2 block">Distance</Label>
              <div className="mb-2 flex justify-between text-sm text-gray-500">
                <span>Any distance</span>
                <span>{filters.maxDistance} miles</span>
              </div>
              <Slider 
                defaultValue={[50]}
                max={100}
                step={5}
                value={[filters.maxDistance || 50]}
                onValueChange={([value]) => 
                  setFilters(prev => ({ ...prev, maxDistance: value }))
                }
              />
            </div>
            
            <Separator className="my-4" />
            
            <div className="mb-6">
              <Label className="text-sm font-medium mb-2 block">Minimum Rating</Label>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    className={`w-8 h-8 flex items-center justify-center ${
                      filters.minRating !== undefined && rating <= filters.minRating
                        ? "text-wedding-gold"
                        : "text-gray-300"
                    }`}
                    onClick={() => setFilters(prev => ({ ...prev, minRating: rating }))}
                  >
                    ★
                  </button>
                ))}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setFilters(prev => ({ ...prev, minRating: 0 }))}
                  className="text-xs ml-2"
                >
                  Clear
                </Button>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="mb-6">
              <Label className="text-sm font-medium mb-2 block">Specialties</Label>
              <div className="space-y-2 mt-2">
                {allSpecialties.map((specialty) => (
                  <div key={specialty} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`specialty-${specialty}`}
                      checked={(filters.specialties || []).includes(specialty)}
                      onCheckedChange={(checked) => 
                        handleSpecialtyChange(specialty, checked === true)
                      }
                    />
                    <label
                      htmlFor={`specialty-${specialty}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {specialty}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {filters.location ? (
              <h2 className="text-2xl font-serif mb-6">
                Wedding Planners {filters.location ? `near ${filters.location}` : ''}
              </h2>
            ) : (
              <h2 className="text-2xl font-serif mb-6">
                Enter a location to find wedding planners
              </h2>
            )}
            
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-wedding-gold mb-4" />
                <p>Finding wedding planners...</p>
              </div>
            ) : filters.latitude && planners.length === 0 ? (
              <div className="bg-wedding-blush/20 border border-wedding-blush rounded-lg p-8 text-center">
                <h3 className="text-xl font-serif text-wedding-navy mb-2">
                  No wedding planners found
                </h3>
                <p className="text-gray-700 mb-4">
                  We couldn't find any wedding planners matching your criteria. 
                  Try adjusting your filters or searching a different location.
                </p>
                <Button 
                  onClick={handleResetFilters}
                  className="bg-wedding-gold hover:bg-wedding-navy text-white"
                >
                  Reset Filters
                </Button>
              </div>
            ) : filters.latitude ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {planners.map((planner) => (
                  <PlannerCard key={planner.id} planner={planner} />
                ))}
              </div>
            ) : (
              <div className="bg-wedding-blush/20 border border-wedding-blush rounded-lg p-8 text-center">
                <h3 className="text-xl font-serif text-wedding-navy mb-2">
                  Enter your location to get started
                </h3>
                <p className="text-gray-700">
                  Please enter your location above to find wedding planners near you.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default PlannersList;