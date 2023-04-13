import { Room } from "../../../api/model/HotelAccommodationsModel";
import { Stack, Typography } from "@mui/material";

interface RoomDetailsSectionProps {
  roomDetails: Room;
}

export const RoomDetailsSection = ({
  roomDetails,
}: RoomDetailsSectionProps): JSX.Element => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      component="section"
      justifyContent="space-between"
    >
      <Stack
        direction={{ xs: "row", sm: "column" }}
        sx={{
          width: { xs: "100%", sm: "20%" },
          minWidth: "120px",
          "& > *": { mr: { xs: "0.5rem", sm: 0 } },
          mb: { xs: "0.5rem", sm: 0 },
        }}
      >
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
      <Stack
        sx={{
          width: { xs: "100%", sm: "75%" },
          "& >p": { textAlign: "justify" },
        }}
      >
        <Typography variant="body2">
          {roomDetails.longDescription ||
            "There is no additional description for this accommodation"}
        </Typography>
      </Stack>
    </Stack>
  );
};
