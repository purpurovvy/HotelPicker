import { Stack, Theme } from "@mui/material";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  isVisible: boolean;
  transitionTimeInSeconds?: number;
}

export const SplashScreen = ({
  isVisible,
  transitionTimeInSeconds = 1,
}: SplashScreenProps) => {
  const [isInDOM, setIsInDOM] = useState<boolean>(true);

  useEffect(() => {
    if (!isVisible) {
      setTimeout(() => setIsInDOM(false), transitionTimeInSeconds * 1000);
    }
  }, [isVisible]);

  if (!isInDOM) {
    return <></>;
  }

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      data-testid="splashScreen"
      sx={{
        zIndex: 1000,
        position: "fixed",
        backgroundColor: (theme: Theme) => theme.palette.common.black,
        width: "100dvw",
        height: "100dvh",
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${transitionTimeInSeconds}s`,
        transitionTimingFunction: "cubic-bezier(.73,-1.32,.69,.63)",
      }}
    >
      <Loading />
    </Stack>
  );
};
