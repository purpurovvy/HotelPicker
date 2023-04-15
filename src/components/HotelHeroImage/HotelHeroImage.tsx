import { Box } from "@mui/material";
import { HotelHeroImageStyles } from "./HotelHeroImage.styles";

export const HotelHeroImage = () => {
  return (
    <Box
      sx={HotelHeroImageStyles.backgroundImage}
      display="flex"
      alignItems="center"
    />
  );
};
