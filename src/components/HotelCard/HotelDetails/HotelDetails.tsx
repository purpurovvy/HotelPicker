import { Stack, Typography } from "@mui/material";
import { StarRating } from "../../commons/StarRating";
import { HotelModel } from "../../../api/model/HotelModel";
import { ImageSlider } from "../../commons/ImageSlider/ImageSlider";
import { HotelDetailsStyles } from "./HotelDetails.styles";

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
    <Stack sx={HotelDetailsStyles.container}>
      <ImageSlider slides={slides} />
      <Stack sx={HotelDetailsStyles.descriptionContainer}>
        <Stack sx={HotelDetailsStyles.starAndHotelNameContainer}>
          <Typography variant="h5">{hotelDetails.name}</Typography>
          <StarRating
            filledStars={hotelDetails.starRating}
            sx={HotelDetailsStyles.star}
          />
        </Stack>
        <Typography variant="subtitle2">{hotelDetails.address1}</Typography>
        <Typography variant="subtitle2">{hotelDetails.address2}</Typography>
      </Stack>
    </Stack>
  );
};
