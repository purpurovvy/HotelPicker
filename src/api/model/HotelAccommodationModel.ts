export interface HotelAccommodationModel {
  rooms: Room[];
}
interface Room {
  bedConfiguration: string;
  disabledAccess: boolean;
  id: string;
  images: Image[];
  longDescription: string;
  name: string;
  shortDescription: string;
}

interface Image {
  url: string;
}
