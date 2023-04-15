import React from "react";
import { Box, IconButton } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

interface CounterProps {
  title: string;
  value: number;
  changeValue: React.Dispatch<React.SetStateAction<number>>;
}

export const Counter = ({ title, value, changeValue }: CounterProps) => {
  const incrementCounter = () =>
    changeValue((currentValue) => currentValue + 1);
  const decrementCounter = () =>
    changeValue((currentValue) =>
      currentValue > 0 ? currentValue - 1 : currentValue
    );

  return (
    <Box>
      {title}:
      <IconButton
        aria-label={`counter-${title}-incrementButton`}
        size="small"
        onClick={incrementCounter}
        data-testid={`counter-${title}-incrementButton`}
        sx={{ mx: "0.25rem" }}
      >
        <Add fontSize="inherit" />
      </IconButton>
      {value}
      <IconButton
        aria-label={`counter-${title}-decrementButton`}
        size="small"
        onClick={decrementCounter}
        data-testid={`counter-${title}-decrementButton`}
        sx={{ ml: "0.25rem" }}
      >
        <Remove fontSize="inherit" />
      </IconButton>
    </Box>
  );
};
