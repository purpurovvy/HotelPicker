import { Stack } from "@mui/material";
import { HotelCard } from "../HotelCard/HotelCard";
import { HotelModel } from "../../api/model/HotelModel";
import { UnknownError } from "../commons/UnknownError";

interface HotelListProps {
  hotelData: [] | HotelModel[];
}

export const HotelList = ({ hotelData }: HotelListProps): JSX.Element => {
  const isAnyHotelAvailable = hotelData.length !== 0;
  return (
    <Stack
      direction="column"
      sx={{
        mx: "auto",
        width: { xs: "94%", sm: "85%", md: "80%", lg: "75%" },
      }}
    >
      {hotelData?.map((hotel) => (
        <HotelCard hotelDetails={hotel} key={hotel.id} />
      ))}
      {!isAnyHotelAvailable && (
        <UnknownError description="Unfortunately, we currently do not have any accommodations that match your requirements" />
      )}
    </Stack>
  );
};
