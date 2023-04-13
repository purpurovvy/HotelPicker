import { HotelAccommodationDto } from "./HotelAccommodationDto";

export interface HotelDto {
  address1: string;
  address2: string;
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  country: string;
  countryCode: string;
  description: string;
  email: string;
  facilities: Facility[];
  id: string;
  images: Image[];
  name: string;
  position: PositionProperties[];
  postcode: string;
  telephone: string;
  town: string;
  hotelAccommodation: HotelAccommodationDto;
  starRating: number;
}

interface Facility {
  code: string;
}

interface Image {
  url: string;
}

interface PositionProperties {
  latitude?: string;
  longitude?: string;
  timezone: string;
}
