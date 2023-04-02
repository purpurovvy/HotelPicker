export interface HotelListDto {
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
  starRating: string;
  telephone: string;
  town: string;
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
