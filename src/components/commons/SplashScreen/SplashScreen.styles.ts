import { Theme } from "@mui/material";

export const SplashScreenStyles = {
  left: 0,
  top: 0,
  zIndex: 1000,
  position: "fixed",
  width: "100dvw",
  height: "100dvh",
  overflow: "hidden",
  transitionTimingFunction: "cubic-bezier(.73,-1.32,.69,.63)",
  backgroundColor: (theme: Theme) => theme.palette.common.black,
};
