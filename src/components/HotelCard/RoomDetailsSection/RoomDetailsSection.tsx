import { Room } from "../../../api/model/HotelAccommodationModel";
import { Stack, Typography } from "@mui/material";
import { RoomDetailsSectionStyles } from "./RoomDetailsSection.styles";

interface RoomDetailsSectionProps {
  roomDetails: Room;
}

export const RoomDetailsSection = ({
  roomDetails,
}: RoomDetailsSectionProps): JSX.Element => {
  return (
    <Stack sx={RoomDetailsSectionStyles.container}>
      <Stack sx={RoomDetailsSectionStyles.roomNumbersContainer}>
        <Typography variant="subtitle2">
          <strong>{roomDetails.name}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Adults: <strong>{roomDetails.occupancy.maxAdults}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Children: <strong>{roomDetails.occupancy.maxChildren}</strong>
        </Typography>
      </Stack>
      <Stack sx={RoomDetailsSectionStyles.roomDescriptionContainer}>
        <Typography variant="body2">
          {roomDetails.longDescription ||
            "There is no additional description for this accommodation"}
        </Typography>
      </Stack>
    </Stack>
  );
};
