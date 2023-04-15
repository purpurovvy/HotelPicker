import React from "react";
import { Stack } from "@mui/material";

interface LayoutProps {
  children?: React.ReactNode;
}

export const PageLayout = ({ children }: LayoutProps): JSX.Element => {
  return <Stack sx={{ maxWidth: "1920px" }}>{children}</Stack>;
};
