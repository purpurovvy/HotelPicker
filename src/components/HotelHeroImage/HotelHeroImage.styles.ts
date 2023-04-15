import background from "../../assets/patrick-robert-doyle-AH8zKXqFITA-unsplash.webp";

export const HotelHeroImageStyles = {
  backgroundImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: { xs: "90%", sm: "90%", md: "90%" },
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: "-1",
    "&::before": {
      zIndex: "-1",
      content: '""',
      background: "rgba(36, 40, 74, 0.5)",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
};
