import { filterHotelsByRequirements } from "./filterHotelsByRequirements";
import { HotelModel } from "../../../api/model/HotelModel";
import { Room } from "../../../api/model/HotelAccommodationModel";

const hotel1: HotelModel = {
  address1: "123 Main St",
  address2: "Apt 4B",
  images: [{ url: "https://example.com/hotel1.jpg" }],
  name: "Hotel 1",
  starRating: 3,
  town: "San Francisco",
  id: "hotel1",
  hotelAccommodation: {
    rooms: [
      {
        bedConfiguration: "1 king bed",
        disabledAccess: true,
        id: "room1",
        images: [{ url: "https://example.com/room1.jpg" }],
        longDescription: "A cozy room with a king-sized bed",
        name: "Cozy King Room",
        shortDescription: "King Room",
        occupancy: { maxAdults: 2, maxChildren: 1, maxOverall: 3 },
      },
      {
        bedConfiguration: "2 double beds",
        disabledAccess: false,
        id: "room2",
        images: [{ url: "https://example.com/room2.jpg" }],
        longDescription: "A spacious room with two double beds",
        name: "Spacious Double Room",
        shortDescription: "Double Room",
        occupancy: { maxAdults: 4, maxChildren: 2, maxOverall: 6 },
      },
    ],
  },
};

const hotel2: HotelModel = {
  address1: "456 Elm St",
  address2: "",
  images: [{ url: "https://example.com/hotel2.jpg" }],
  name: "Hotel 2",
  starRating: 4,
  town: "New York City",
  id: "hotel2",
  hotelAccommodation: {
    rooms: [
      {
        bedConfiguration: "2 queen beds",
        disabledAccess: true,
        id: "room3",
        images: [{ url: "https://example.com/room3.jpg" }],
        longDescription: "A luxurious room with two queen-sized beds",
        name: "Luxury Queen Room",
        shortDescription: "Queen Room",
        occupancy: { maxAdults: 2, maxChildren: 2, maxOverall: 4 },
      },
    ],
  },
};

const hotelMockData: HotelModel[] = [hotel1, hotel2];

describe("filterHotelsByRequirements", () => {
  it("Should return an empty array if no hotels match the requirements", () => {
    const result = filterHotelsByRequirements(5, 2, 2, hotelMockData);
    expect(result).toEqual([]);
  });

  it("Should return an empty array if the input is invalid", () => {
    //@ts-expect-error Expected that null is not proper argument
    const result = filterHotelsByRequirements(-1, -1, -1, null);
    expect(result).toEqual([]);
  });

  it("Should filter hotels by star rating and room occupancy", () => {
    const result = filterHotelsByRequirements(3, 3, 1, hotelMockData);
    expect(result.length).toBe(1);

    const filteredHotel = result[0];
    expect(filteredHotel.starRating).toBe(3);
    expect(filteredHotel.hotelAccommodation).toBeDefined();

    const filteredRooms: Room[] = filteredHotel.hotelAccommodation.rooms;
    expect(filteredRooms.length).toBe(1);

    const filteredRoom = filteredRooms[0];
    expect(filteredRoom.occupancy.maxAdults).toBe(4);
    expect(filteredRoom.occupancy.maxChildren).toBe(2);
  });
});
