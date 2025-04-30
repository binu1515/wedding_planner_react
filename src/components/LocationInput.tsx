
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface LocationInputProps {
  onLocationSelect: (latitude: number, longitude: number, locationName: string) => void;
  initialLocation?: string;
  className?: string;
}

const LocationInput: React.FC<LocationInputProps> = ({ 
  onLocationSelect, 
  initialLocation = '',
  className = ''
}) => {
  const [location, setLocation] = useState(initialLocation);
  const [isLocating, setIsLocating] = useState(false);
  
  const handleCurrentLocation = () => {
    setIsLocating(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Get coordinates
          const { latitude, longitude } = position.coords;
          
          // Use reverse geocoding to get location name (simplified for demo)
          fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
            .then(response => response.json())
            .then(data => {
              const locationName = data.address.city || data.address.town || data.address.village || data.address.county;
              setLocation(locationName);
              onLocationSelect(latitude, longitude, locationName);
              setIsLocating(false);
            })
            .catch(() => {
              // Fallback if reverse geocoding fails
              setLocation("Current Location");
              onLocationSelect(latitude, longitude, "Current Location");
              setIsLocating(false);
            });
        },
        (error) => {
          console.error("Error getting location:", error);
          setIsLocating(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setIsLocating(false);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!location.trim()) return;
    
    // Simple geocoding for demo purposes
    // In a real app, you would use a proper geocoding service like Google Maps API
    fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`)
      .then(response => response.json())
      .then(data => {
        if (data && data.length > 0) {
          const { lat, lon, display_name } = data[0];
          onLocationSelect(Number(lat), Number(lon), display_name);
        }
      })
      .catch(error => {
        console.error("Error geocoding address:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
      <div className="relative flex-1">
        <Input
          type="text"
          placeholder="Enter city, state or zip code..."
          value={location}
          onChange={handleInputChange}
          className="pr-10"
        />
        {isLocating && (
          <Loader2 className="animate-spin h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        )}
      </div>
      
      <Button 
        type="button" 
        variant="outline"
        onClick={handleCurrentLocation}
        disabled={isLocating}
      >
        Near Me
      </Button>
      
      <Button type="submit">Search</Button>
    </form>
  );
};

export default LocationInput;