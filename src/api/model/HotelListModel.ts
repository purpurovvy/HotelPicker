export interface HotelListModel {
  address1: string;
  address2: string;
  images: Image[];
  name: string;
  starRating: string;
  town: string;
}

interface Image {
  url: string;
}
