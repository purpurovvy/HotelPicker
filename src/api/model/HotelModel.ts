import { HotelAccommodationsModel } from "./HotelAccommodationsModel";

export interface HotelModel {
  address1: string;
  address2: string;
  images: Image[];
  name: string;
  starRating: number;
  town: string;
  id: string;
  hotelAccommodation: HotelAccommodationsModel;
}

interface Image {
  url: string;
}
