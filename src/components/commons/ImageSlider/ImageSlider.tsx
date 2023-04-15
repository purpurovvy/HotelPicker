import { useId, useState } from "react";
import { Box, SxProps } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { ImageSliderStyles } from "./ImageSlider.styles";
interface Slider {
  url: string;
  title: string;
}

interface ImageSliderProps {
  slides: Slider[];
  propsSlideStyles?: SxProps;
  sx?: SxProps;
}

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
    index === currentIndex ? ImageSliderStyles.activeSlideStyles : {};

  const goToPreviousSlide = () => {
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box sx={{ ...ImageSliderStyles.containerStyling, ...sx } as SxProps}>
      <KeyboardArrowLeftIcon
        data-testid="imageSlider-leftArrow"
        sx={{ ...ImageSliderStyles.arrowStyles, left: "2%" }}
        onClick={() => goToPreviousSlide()}
      />
      {slides.map((slide, index) => (
        <Box
          key={`imageSlide-${index}-${id}`}
          sx={
            {
              ...ImageSliderStyles.slideStyling,
              backgroundImage: `url(${slide.url})`,
              ...activeSlideStyling(index),
              ...propsSlideStyles,
            } as SxProps
          }
        />
      ))}
      <KeyboardArrowRightIcon
        data-testid="imageSlider-rightArrow"
        sx={{ ...ImageSliderStyles.arrowStyles, right: "2%" }}
        onClick={() => goToNext()}
      />
    </Box>
  );
};
