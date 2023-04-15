import { Stack, Typography } from "@mui/material";
import { StarRating } from "../../commons/StarRating";
import { HotelModel } from "../../../api/model/HotelModel";
import { ImageSlider } from "../../commons/ImageSlider/ImageSlider";

interface HotelDetailsProps {
  hotelDetails: HotelModel;
}

export const HotelDetails = ({
  hotelDetails,
}: HotelDetailsProps): JSX.Element => {
  const slides = hotelDetails.images.map((image, index) => ({
    url: image.url,
    title: `${hotelDetails.name}-image-${index}`,
  }));
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      sx={{ flex: 1, pb: "0.5rem" }}
    >
      <ImageSlider slides={slides} />
      <Stack direction="column" sx={{ flex: 1 }}>
        <Stack
          direction="row"
          sx={{ width: "100%", justifyContent: "space-between" }}
        >
          <Typography variant="h5">{hotelDetails.name}</Typography>
          <StarRating
            filledStars={hotelDetails.starRating}
            sx={{ color: "warning.main" }}
          />
        </Stack>
        <Typography variant="subtitle2">{hotelDetails.address1}</Typography>
        <Typography variant="subtitle2">{hotelDetails.address2}</Typography>
      </Stack>
    </Stack>
  );
};
