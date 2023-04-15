export const HotelFilterPanelStyles = {
  mx: "auto",
  border: "1px solid #000",
  p: "0.25rem 0.5rem",
  width: { xs: "90%", sm: "75%", lg: "65%" },
  maxWidth: "600px",
  my: "1rem",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
  backgroundColor: "background.default",
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "space-between",
  alignItems: "center",
  "> :not(:last-child)": {
    mb: { xs: "0.5rem", sm: 0 },
  },
};
