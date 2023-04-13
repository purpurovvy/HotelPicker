import { theme } from "../../theme";

export const HotelCardStyles = {
  "& > div": { mb: "1rem" },
  "& > hr:not(:last-child)": {
    width: "100%",
    borderBottom: "1px solid black",
  },

  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
  mb: "2rem",
  px: "1rem",
  py: "1.5rem",
  borderRadius: "0.25rem",
  background: theme.palette.common.white,
};
