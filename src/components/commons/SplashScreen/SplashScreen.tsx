import { Stack } from "@mui/material";
import { Loading } from "./Loading";
import { useEffect, useState } from "react";
import { SplashScreenStyles } from "./SplashScreen.styles";

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
        ...SplashScreenStyles,
        transition: `opacity ${transitionTimeInSeconds}s`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Loading />
    </Stack>
  );
};
