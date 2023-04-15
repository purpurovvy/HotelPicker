export interface HotelAccommodationModel {
  rooms: Room[];
}
export interface Room {
  bedConfiguration: string;
  disabledAccess: boolean;
  id: string;
  images: Image[];
  longDescription: string;
  name: string;
  shortDescription: string;
  occupancy: Occupancy;
}

interface Image {
  url: string;
}
interface Occupancy {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
}
