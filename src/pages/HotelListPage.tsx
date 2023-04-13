import { useGetHotelList } from "../api/api.hookCalls";
import { Stack } from "@mui/material";
import { HotelCard } from "../components/HotelCard/HotelCard";
import { useEffect } from "react";

export const HotelListPage = (): JSX.Element => {
  const { data } = useGetHotelList();

  useEffect(() => {}, [data]);

  return (
    <>
      <Stack></Stack>
      <Stack
        direction="column"
        sx={{
          mx: "auto",
          width: { xs: "94%", sm: "90%", md: "85%", lg: "80%" },
          maxWidth: "1920px",
        }}
      >
        {data?.map((hotel) => (
          <HotelCard hotelDetails={hotel} key={hotel.id} />
        ))}
      </Stack>
    </>
  );
};
