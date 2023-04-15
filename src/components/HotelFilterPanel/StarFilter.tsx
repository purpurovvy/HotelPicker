import React, { useState } from "react";
import { Star } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";

interface StarProps {
  starsValue: number;
  changeStarsValue: React.Dispatch<React.SetStateAction<number>>;
}

export const StarFilter = ({
  starsValue,
  changeStarsValue,
}: StarProps): JSX.Element => {
  const stars: number[] = Array(5).fill(0);
  const [hoveredStars, setHoveredStars] = useState<number | undefined>(
    undefined
  );

  const handleClick = (value: number) => {
    changeStarsValue(value);
  };
  const handleMouseOver = (value: number) => {
    setHoveredStars(value);
  };
  const handleMouseLeave = () => {
    setHoveredStars(undefined);
  };

  return (
    <Stack direction="row">
      {stars.map((_, index) => (
        <Button
          aria-label={`starButton-${index}`}
          key={`starButton-${index}`}
          data-testid={`starButton-${index}`}
          onClick={() => handleClick(index + 1)}
          onMouseOver={() => handleMouseOver(index + 1)}
          onMouseLeave={() => handleMouseLeave()}
          sx={{
            p: 0,
            width: "fit-content",
            "&:hover": { backgroundColor: "transparent" },
          }}
        >
          <Star
            sx={{
              color:
                (hoveredStars || starsValue) > index
                  ? "warning.main"
                  : "text.disabled",
            }}
          />
        </Button>
      ))}
    </Stack>
  );
};
