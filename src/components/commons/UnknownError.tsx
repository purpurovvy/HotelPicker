import { ErrorAnimation } from "./ErrorAnimation/ErrorAnimation";
import { Typography } from "@mui/material";

interface UnknownErrorProps {
  description?: string;
}

export const UnknownError = ({
  description = "Something went wrong... Try again later",
}: UnknownErrorProps): JSX.Element => {
  return (
    <ErrorAnimation error="unknown">
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        {description}
      </Typography>
    </ErrorAnimation>
  );
};
