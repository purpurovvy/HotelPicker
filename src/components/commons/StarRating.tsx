import { Stack, SxProps } from "@mui/material";
import { Star } from "@mui/icons-material";
import { useId } from "react";

interface StarRatingProps {
  filledStars: number;
  totalStars?: number;
  sx?: SxProps;
}

export const StarRating = ({
  filledStars,
  totalStars = 5,
  sx,
}: StarRatingProps): JSX.Element => {
  const id = useId();
  const outlinedStarsArray = Array.from({ length: totalStars - filledStars });
  const filledStarsArray = Array.from({ length: filledStars });

  return (
    <Stack direction="row" sx={sx}>
      {filledStarsArray.map((filledStar, key) => (
        <Star key={`filledStar-${key}-${id}`} />
      ))}
      {outlinedStarsArray.map((outlinedStar, key) => (
        <Star
          key={`disabledStar-${key}-${id}`}
          sx={{ color: "text.disabled" }}
        />
      ))}
    </Stack>
  );
};
