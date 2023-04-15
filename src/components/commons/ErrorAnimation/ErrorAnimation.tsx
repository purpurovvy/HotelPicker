/* eslint-disable import/extensions */
import React from "react";
import { useLottie } from "lottie-react";
import { Stack } from "@mui/material";
import LottieErrorAnimation from "../../../assets/lottieAnimations/error.json";
import Lottie404Animation from "../../../assets/lottieAnimations/404.json";
import { ErrorAnimationStyles } from "./ErrorAnimation.styles";

type ErrorAnimationType = "404" | "unknown";

interface ErrorAnimationProps {
  error: ErrorAnimationType;
  children?: React.ReactNode;
}

const getErrorAnimationData = (error: ErrorAnimationType) => {
  switch (error) {
    case "404":
      return Lottie404Animation;
    case "unknown":
      return LottieErrorAnimation;
  }
};

export const ErrorAnimation = ({
  error,
  children,
}: ErrorAnimationProps): JSX.Element => {
  const options = {
    animationData: getErrorAnimationData(error),
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <Stack sx={ErrorAnimationStyles.errorContainer}>
      <Stack sx={ErrorAnimationStyles.animationContainer}>{View}</Stack>
      {children}
    </Stack>
  );
};
