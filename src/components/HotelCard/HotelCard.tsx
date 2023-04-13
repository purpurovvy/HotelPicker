import { HotelModel } from "../../api/model/HotelModel";
import { Stack } from "@mui/material";
import { HotelDetails } from "./HotelDetails/HotelDetails";
import { RoomDetailsSection } from "./RoomDetailsSection/RoomDetailsSection";
import { HotelCardStyles } from "./HotelCard.styles";
import React from "react";

interface HotelCardProps {
  hotelDetails: HotelModel;
}

export const HotelCard = ({ hotelDetails }: HotelCardProps): JSX.Element => {
  return (
    <Stack
      direction="column"
      data-testid={`hotelContainer-${hotelDetails.id}`}
      sx={HotelCardStyles}
    >
      <HotelDetails hotelDetails={hotelDetails} />
      {hotelDetails.hotelAccommodation?.rooms.map((room) => (
        <React.Fragment key={room.id}>
          <RoomDetailsSection roomDetails={room} />
          <hr />
        </React.Fragment>
      ))}
    </Stack>
  );
};
