import { HotelModel } from "../../../api/model/HotelModel";

export function filterHotelsByRequirements(
  starRating: number,
  numAdults: number,
  numChildren: number,
  hotels: HotelModel[]
): [] | HotelModel[] {
  if (
    !hotels ||
    !hotels.length ||
    starRating < 0 ||
    numAdults < 0 ||
    numChildren < 0
  ) {
    return [];
  }

  return hotels.reduce((matchedHotels: HotelModel[], hotel: HotelModel) => {
    if (hotel.starRating < starRating) {
      return matchedHotels;
    }

    const matchedRooms = hotel.hotelAccommodation.rooms.filter(
      (room) =>
        room.occupancy.maxAdults >= numAdults &&
        room.occupancy.maxChildren >= numChildren
    );

    if (matchedRooms.length > 0) {
      matchedHotels.push({
        ...hotel,
        hotelAccommodation: {
          ...hotel.hotelAccommodation,
          rooms: matchedRooms,
        },
      });
    }

    return matchedHotels;
  }, []);
}
