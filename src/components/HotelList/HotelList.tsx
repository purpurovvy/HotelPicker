import { Stack } from "@mui/material";
import { HotelCard } from "../HotelCard/HotelCard";
import { HotelModel } from "../../api/model/HotelModel";
import { UnknownError } from "../commons/UnknownError";
import { HotelListStyles } from "./HotelList.styles";

interface HotelListProps {
  hotelData: [] | HotelModel[];
}

export const HotelList = ({ hotelData }: HotelListProps): JSX.Element => {
  const isAnyHotelAvailable = hotelData.length !== 0;
  return (
    <Stack sx={HotelListStyles}>
      {hotelData?.map((hotel) => (
        <HotelCard hotelDetails={hotel} key={hotel.id} />
      ))}
      {!isAnyHotelAvailable && (
        <UnknownError description="Unfortunately, we currently do not have any accommodations that match your requirements" />
      )}
    </Stack>
  );
};
