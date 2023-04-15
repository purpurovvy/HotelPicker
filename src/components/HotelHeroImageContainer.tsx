import React from "react";
import { Stack } from "@mui/material";
import { HotelHeroImage } from "./HotelHeroImage/HotelHeroImage";

interface HotelHeroImageContainerProps {
  children: React.ReactNode;
}
export const HotelHeroImageContainer = ({
  children,
}: HotelHeroImageContainerProps): JSX.Element => {
  return (
    <Stack
      sx={{ height: "300px", position: "relative" }}
      justifyContent="flex-end"
    >
      <HotelHeroImage />
      {children}
    </Stack>
  );
};
