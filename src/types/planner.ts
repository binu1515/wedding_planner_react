
export interface Planner {
  id: string;
  name: string;
  description: string;
  location: string;
  latitude?: number;
  longitude?: number;
  coverImage?: string;
  profileImage?: string;
  rating?: number;
  distance?: number;
  specialties: string[];
  events?: Event[];
  services?: Service[];
  about?: string;
  contactEmail?: string;
  contactPhone?: string;
  socialMedia?: {
    instagram?: string;
    facebook?: string;
    pinterest?: string;
    website?: string;
  };
}

export interface Event {
  id: string;
  title: string;
  description?: string;
  image: string;
  date?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
}

export interface PlannerFilters {
  location?: string;
  latitude?: number;
  longitude?: number;
  specialties?: string[];
  minRating?: number;
  maxDistance?: number;
}