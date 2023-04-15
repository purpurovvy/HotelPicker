import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "unset",
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "1.68755rem",
      lineHeight: "2rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.25rem",
      lineHeight: "1.625rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: ".9375rem",
      lineHeight: "1.22rem",
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: "1.25rem",
      lineHeight: "1.625rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: ".875rem",
      lineHeight: "1.22rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: ".875rem",
      lineHeight: "1.5rem",
      fontWeight: 300,
    },
    body2: {
      fontSize: ".8125rem",
      lineHeight: "1.25rem",
      fontWeight: 300,
    },
    caption: {
      fontSize: ".8125rem",
      lineHeight: "1rem",
      fontWeight: 700,
    },
    overline: {
      fontSize: ".625rem",
      lineHeight: ".75rem",
      fontWeight: 700,
    },
  },
  palette: {
    text: {
      primary: "#0e0e2c",
      secondary: "#757575",
      disabled: "#9DA0BF",
    },
    common: {
      black: "#0e0e2c",
      white: "#FFFFFF",
    },
    primary: {
      main: "#201d51",
      light: "#EFF0FC",
    },
    secondary: {
      main: "#9f2460",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#03B075",
      light: "#E1F7EF",
    },
    warning: {
      main: "#FEBB02FF",
    },
    info: {
      main: "#0049B8",
    },
    error: {
      main: "#DE3C63",
    },
    grey: {
      100: "#F8F8FC",
      200: "#EEEFF8",
      300: "#DDDFF1",
      400: "#CED0E4",
      600: "#9DA0BF",
      800: "#6B6E8D",
      900: "#0e0e2c",
    },
  },
});
