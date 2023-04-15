import { HotelAccommodationModel } from "./HotelAccommodationModel";

export interface HotelModel {
  address1: string;
  address2: string;
  images: Image[];
  name: string;
  starRating: number;
  town: string;
  id: string;
  hotelAccommodation: HotelAccommodationModel;
}

interface Image {
  url: string;
}
