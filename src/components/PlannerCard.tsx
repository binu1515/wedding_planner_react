
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Planner } from '@/types/planner';

interface PlannerCardProps {
  planner: Planner;
}

const PlannerCard: React.FC<PlannerCardProps> = ({ planner }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={planner.coverImage || 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069'} 
          alt={`${planner.name}'s cover image`}
          className="w-full h-full object-cover"
        />
        {planner.distance && (
          <div className="absolute bottom-2 right-2 bg-wedding-navy/80 text-white text-xs px-2 py-1 rounded-full">
            {planner.distance < 1 ? 'Less than 1 mile' : `${planner.distance} miles`} away
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-serif text-xl font-semibold text-wedding-navy">{planner.name}</h3>
            <p className="text-sm text-gray-600">{planner.location}</p>
          </div>
          
          {planner.rating && (
            <div className="flex items-center bg-wedding-lightGold text-wedding-gold px-2 py-1 rounded">
              <span className="text-sm font-semibold">{planner.rating}</span>
              <span className="ml-1">★</span>
            </div>
          )}
        </div>
        
        <p className="text-sm text-gray-700 line-clamp-3 mb-3">{planner.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {planner.specialties.slice(0, 3).map((specialty, index) => (
            <span 
              key={index} 
              className="text-xs bg-wedding-blush text-gray-800 px-2 py-1 rounded"
            >
              {specialty}
            </span>
          ))}
          {planner.specialties.length > 3 && (
            <span className="text-xs bg-wedding-blush text-gray-800 px-2 py-1 rounded">
              +{planner.specialties.length - 3} more
            </span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 border-t border-gray-100 mt-2">
        <Link to={`/planner/${planner.id}`} className="w-full">
          <Button variant="outline" className="w-full border-wedding-gold text-wedding-navy hover:bg-wedding-lightGold">
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PlannerCard;