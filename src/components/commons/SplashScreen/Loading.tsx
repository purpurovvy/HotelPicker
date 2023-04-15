import { styled } from "@mui/material";

export const Loading = styled("div")({
  "@keyframes spinLeft": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(720deg)" },
  },
  "@keyframes spinRight": {
    from: { transform: "rotate(360deg)" },
    to: { transform: "rotate(0deg)" },
  },
  width: "8vmax",
  height: "8vmax",
  borderRight: "4px solid #ffffff",
  borderRadius: "100%",
  animation: "spinRight 800ms linear infinite",
  position: "relative",
  "&:before, &:after": {
    content: '""',
    width: "6vmax",
    height: "6vmax",
    display: "block",
    position: "absolute",
    top: "calc(50% - 3vmax)",
    left: "calc(50% - 3vmax)",
    borderLeft: "3px solid #ffffff",
    borderRadius: "100%",
    animation: "spinLeft 800ms linear infinite",
  },
  "&:after": {
    width: "4vmax",
    height: "4vmax",
    top: "calc(50% - 2vmax)",
    left: "calc(50% - 2vmax)",
    border: "0",
    borderRight: "2px solid #ffffff",
    animation: "none",
  },
});
