export const RoomDetailsSectionStyles = {
  container: {
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
  },
  roomNumbersContainer: {
    flexDirection: { xs: "row", sm: "column" },
    width: { xs: "100%", sm: "20%" },
    minWidth: "120px",
    "& > .MuiTypography-root": { mr: { xs: "0.5rem", sm: 0 } },
    mb: { xs: "0.5rem", sm: 0 },
  },
  roomDescriptionContainer: {
    width: { xs: "100%", sm: "75%" },
    "& >p": { textAlign: "justify" },
  },
};
