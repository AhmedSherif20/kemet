export interface IEvent {
  id: number;
  event_name: string;
  event_datetime: Date;
  location: string;
  image_url: null;
  description: string;
  event_type: string;
  ticket_price: string;
  ticket_availability: number;
  accessibility_info: string;
  contact_person: string;
  contact_email: string;
  contact_phone: string;
  website_url: string;
  recommended_age_group: string;
  language: string;
  transportation_options: string;
  nearby_attractions: string;
  social_media_handles: string;
  hashtags: string;
  special_requirements: string;
  weather_considerations: string;
  cost_of_participation: string;
  sustainability_initiatives: string;
  created_at: Date;
  updated_at: Date;
}

export interface IHotelFacilities {
  icon: string;
  name: string;
}

export interface IUserData {
  user_id?: string | number;
  email: string;
  password: string;
  First_Name: string;
  Last_Name: string;
  cPassword: string;
  Phone_Number: string;
  Address: string;
  Country: string;
  Date_of_Birth: Date;
  Gender: string;
  Passport_Number: string;
  arrival_time: Date;
  departure_time: Date;
  arrival_airport: string;
  departure_airport: string;
  Profile_Picture: string;
  Payment_Methods: string;
}

export interface IHotelQueryParams {
  city: string;
  arriveDate: string;
  leaveDate: string;
  numOfGuests: number;
}

export interface IHotel {
  coverUrl: string;
  name: string;
  location: string;
  rating: number;
  pricePerNight: number;
  description: string;
  review:
    | 'high recommend'
    | 'excellent'
    | 'good'
    | 'very good'
    | 'normal'
    | 'bad'
    | 'so bad';
  website: string;
}

export interface IAgent {
  job_id: number;
  job_title: string;
  location: string;
  job_type: string;
  salary: string;
  job_description: string;
  person_name: string;
  contact_email: string;
  contact_phone: string;
  created_at: string;
  updated_at: string;
  imageUrl?: string;
}
