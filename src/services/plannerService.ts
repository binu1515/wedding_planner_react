
import { Planner, PlannerFilters } from '@/types/planner';

// Mock data and service functions for wedding planners
// In a real application, this would be replaced with actual API calls

class PlannerService {
  private planners: Planner[] = [
    {
      id: '1',
      name: 'Ele',
      description: 'Specializing in luxury weddings with impeccable attention to detail',
      location: 'Kollam, Kerala',
      latitude: 40.7128,
      longitude: -74.0060,
      specialties: ['Luxury Weddings', 'Destination Weddings', 'Cultural Weddings'],
      rating: 4.9,
      coverImage: 'https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?auto=format&fit=crop&q=80&w=2069',
      profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974',
      events: [
        {
          id: '101',
          title: 'Sarah & Michael\'s Wedding',
          image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070',
          date: '2023-06-15'
        },
        {
          id: '102',
          title: 'Emma & James\'s Wedding',
          image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=2070',
          date: '2023-08-22'
        },
        {
          id: '103',
          title: 'Jennifer & David\'s Wedding',
          image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070',
          date: '2023-05-10'
        }
      ],
      services: [
        {
          id: '201',
          name: 'Full Wedding Planning',
          description: 'Comprehensive planning from engagement to wedding day',
          price: '$8,000+'
        },
        {
          id: '202',
          name: 'Month-of Coordination',
          description: 'Support in the final month leading up to your wedding',
          price: '$3,000+'
        },
        {
          id: '203',
          name: 'Wedding Design',
          description: 'Creating a cohesive aesthetic for your special day',
          price: '$4,500+'
        }
      ],
      about: "Elegant Affairs was founded in 2010 with a mission to create unforgettable wedding experiences. Our team of experienced planners brings creativity, organization, and a personal touch to every event. Based in New York City, we serve couples throughout the Tri-State area and beyond.",
      contactEmail: 'hello@elegantaffairs.com',
      contactPhone: '(212) 555-1234',
      socialMedia: {
        instagram: 'elegantaffairs',
        facebook: 'ElegantAffairsNYC',
        website: 'https://elegantaffairs.com'
      }
    },
    {
      id: '2',
      name: 'Dream Weddings',
      description: 'Creating magical moments for your special day',
      location: 'Kollam, Kerala',
      latitude: 34.0522,
      longitude: -118.2437,
      rating: 4.9,
      specialties: ['Beach Weddings', 'Celebrity Weddings', 'Theme Weddings'],
      about: 'Dream Weddings was founded with the belief that every wedding should be as unique as the couple it celebrates. Based in sunny Los Angeles, we bring creativity and flair to each event, ensuring your special day is everything you dreamed of and more.',
      contactEmail: 'hello@dreamweddings.com',
      contactPhone: '(310) 555-6789',
      socialMedia: {
        instagram: 'dreamweddings',
        pinterest: 'dreamweddingsLA',
        website: 'https://dreamweddings.com'
      },
      coverImage: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070',
      profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961',
      events: [
        {
          id: '201',
          title: 'Alex & Morgan\'s Beach Wedding',
          image: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&q=80&w=2070',
        },
        {
          id: '202',
          title: 'Taylor & Jordan\'s Garden Wedding',
          image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070',
        }
      ],
      services: [
        {
          id: '301',
          name: 'Full Service Planning',
          description: 'Complete wedding planning from start to finish',
          price: '$10,000+'
        },
        {
          id: '302',
          name: 'Day-of Coordination',
          description: 'Professional coordination on your wedding day',
          price: '$2,500+'
        }
      ]
    },
    {
      id: '3',
      name: 'Forever Memories',
      description: 'Building meaningful celebrations with a personal touch',
      location: 'Chicago, IL',
      latitude: 41.8781,
      longitude: -87.6298,
      specialties: ['Traditional Weddings', 'Winter Weddings', 'Multicultural Weddings'],
      rating: 4.7,
      coverImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=2073',
      events: [
        {
          id: '301',
          title: 'Rachel & Ben\'s Downtown Wedding',
          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2069',
        }
      ],
      services: [
        {
          id: '401',
          name: 'Full Planning Package',
          description: 'Comprehensive planning services for your entire wedding journey',
          price: '$7,000-$12,000'
        },
        {
          id: '402',
          name: 'Partial Planning',
          description: 'Planning assistance for selected aspects of your wedding',
          price: '$4,000-$7,000'
        },
        {
          id: '403',
          name: 'Wedding Weekend Management',
          description: 'Coordination for your entire wedding weekend',
          price: '$3,500+'
        }
      ]
    },
    {
      id: '4',
      name: 'Pure Bliss Events',
      description: 'Crafting joyful celebrations that reflect your unique love story',
      location: 'Seattle, WA',
      latitude: 47.6062,
      longitude: -122.3321,
      specialties: ['Outdoor Weddings', 'Eco-Friendly Weddings', 'Intimate Ceremonies'],
      rating: 5.0,
      distance: 2.3,
      coverImage: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&q=80&w=2070',
    },
    {
      id: '5',
      name: 'Timeless Celebrations',
      description: 'Elegance and sophistication for your wedding day',
      location: 'Kollam Kerala',
      latitude: 42.3601,
      longitude: -71.0589,
      specialties: ['Historic Venue Weddings', 'Elegant Affairs', 'Classic Weddings'],
      rating: 4.6,
      distance: 8.7,
      coverImage: 'https://images.unsplash.com/photo-1535185384036-28bbc8035f28?auto=format&fit=crop&q=80&w=2070',
    }
  ];

  private specialties = [
    'Luxury Weddings', 
    'Destination Weddings', 
    'Cultural Weddings',
    'Beach Weddings',
    'Celebrity Weddings',
    'Theme Weddings',
    'Traditional Weddings',
    'Winter Weddings',
    'Multicultural Weddings',
    'Outdoor Weddings',
    'Eco-Friendly Weddings',
    'Intimate Ceremonies',
    'Historic Venue Weddings',
    'Elegant Affairs',
    'Classic Weddings'
  ];

  // Get all available wedding planners with optional filtering
  getWeddingPlanners(filters?: PlannerFilters): Promise<Planner[]> {
    return new Promise((resolve) => {
      // Simulate API delay
      setTimeout(() => {
        let filteredPlanners = [...this.planners];
        
        if (filters) {
          // Filter by location (simplified for demo)
          if (filters.latitude && filters.longitude) {
            // Calculate distance and add to planners (simplified calculation)
            filteredPlanners = filteredPlanners.map(planner => {
              if (planner.latitude && planner.longitude) {
                const distance = this.calculateDistance(
                  filters.latitude!,
                  filters.longitude!,
                  planner.latitude,
                  planner.longitude
                );
                return { ...planner, distance: Number(distance.toFixed(1)) };
              }
              return planner;
            });
            
            // Filter by max distance if specified
            if (filters.maxDistance) {
              filteredPlanners = filteredPlanners.filter(
                planner => planner.distance !== undefined && planner.distance <= filters.maxDistance!
              );
            }
          }
          
          // Filter by rating
          if (filters.minRating) {
            filteredPlanners = filteredPlanners.filter(
              planner => planner.rating !== undefined && planner.rating >= filters.minRating!
            );
          }
          
          // Filter by specialties
          if (filters.specialties && filters.specialties.length > 0) {
            filteredPlanners = filteredPlanners.filter(planner =>
              filters.specialties!.some(specialty => planner.specialties.includes(specialty))
            );
          }
        }
        
        resolve(filteredPlanners);
      }, 800);
    });
  }
  
  // Get a single wedding planner by ID
  getWeddingPlannerById(id: string): Promise<Planner | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const planner = this.planners.find(p => p.id === id);
        resolve(planner);
      }, 300);
    });
  }
  
  // Get list of all specialties
  getSpecialties(): Promise<string[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.specialties);
      }, 200);
    });
  }
  
  // Helper function to calculate distance between two coordinates (in miles)
  // Using Haversine formula
  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 3958.8; // Earth's radius in miles
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }
  
  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}

export const plannerService = new PlannerService();