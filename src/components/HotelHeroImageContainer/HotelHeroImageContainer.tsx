import React from "react";
import { Stack, Typography } from "@mui/material";
import { HotelHeroImage } from "../HotelHeroImage/HotelHeroImage";
import { HotelHeroImageContainerStyles } from "./HotelHeroImageContainer.styles";

interface HotelHeroImageContainerProps {
  children: React.ReactNode;
}
export const HotelHeroImageContainer = ({
  children,
}: HotelHeroImageContainerProps): JSX.Element => {
  return (
    <Stack sx={HotelHeroImageContainerStyles.container}>
      <Typography variant="h1" sx={HotelHeroImageContainerStyles.text}>
        Your dream vacation starts with a simple reservation
      </Typography>
      <HotelHeroImage />
      {children}
    </Stack>
  );
};
