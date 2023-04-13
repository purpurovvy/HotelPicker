import { useId, useState } from "react";
import { Box, SxProps } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

interface Slider {
  url: string;
  title: string;
}

interface ImageSliderProps {
  slides: Slider[];
  propsSlideStyles?: SxProps;
  sx?: SxProps;
}

const arrowStyles: SxProps = {
  position: "absolute",
  top: "50%",
  transform: "translate(0,-50%)",
  fontSize: "45px",
  color: "common.white",
  zIndex: 2,
  cursor: "pointer",
  width: "2rem",
  height: "2rem",
};

const containerStyling: SxProps = {
  position: "relative",
  width: { xs: "100%", sm: "24%" },
  minWidth: "11.25rem",
  height: "11.25rem",
  borderRadius: "5px",
  mb: { xs: "0.5rem", sm: 0 },
  mr: { xs: 0, sm: "1rem" },
};

const slideStyling: SxProps = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
  transitionDuration: "1000ms",
  opacity: 0,
  zIndex: 0,
};

const activeSlideStyles: SxProps = {
  opacity: 1,
  zIndex: 1,
};

export const ImageSlider = ({
  slides,
  propsSlideStyles,
  sx,
}: ImageSliderProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const id = useId();
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === slides.length - 1;
  const activeSlideStyling = (index: number) =>
    index === currentIndex ? activeSlideStyles : {};

  const goToPreviousSlide = () => {
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box sx={{ ...containerStyling, ...sx }}>
      <KeyboardArrowLeftIcon
        data-testid="imageSlider-leftArrow"
        sx={{ ...arrowStyles, left: "2%" }}
        onClick={() => goToPreviousSlide()}
      />
      {slides.map((slide, index) => (
        <Box
          key={`imageSlide-${index}-${id}`}
          sx={{
            ...slideStyling,
            backgroundImage: `url(${slide.url})`,
            ...activeSlideStyling(index),
            ...propsSlideStyles,
          }}
        />
      ))}
      <KeyboardArrowRightIcon
        data-testid="imageSlider-rightArrow"
        sx={{ ...arrowStyles, right: "2%" }}
        onClick={() => goToNext()}
      />
    </Box>
  );
};
