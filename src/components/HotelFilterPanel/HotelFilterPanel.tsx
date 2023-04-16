import React, { useEffect } from "react";
import { StarFilter } from "./StarFilter";
import { Stack } from "@mui/material";
import { Counter } from "../commons/Counter";
import { useState } from "react";
import { HotelModel } from "../../api/model/HotelModel";
import { filterHotelsByRequirements } from "./filterHotelsByRequirements/filterHotelsByRequirements";
import { HotelHeroImageContainer } from "../HotelHeroImageContainer/HotelHeroImageContainer";
import { HotelFilterPanelStyles } from "./HotelFilterPanel.styles";

interface HotelFilterPanelProps {
  hotelData: HotelModel[] | [];
  setHotelData: React.Dispatch<React.SetStateAction<HotelModel[] | []>>;
}

export const HotelFilterPanel = ({
  hotelData,
  setHotelData,
}: HotelFilterPanelProps): JSX.Element => {
  const [childrenAccommodationCount, setChildrenAccommodationCount] =
    useState<number>(0);
  const [adultsAccommodationCount, setAdultsAccommodationCount] =
    useState<number>(2);
  const [starAssessment, setStarAssessment] = useState<number>(0);

  useEffect(() => {
    if (hotelData) {
      setHotelData(
        filterHotelsByRequirements(
          starAssessment,
          adultsAccommodationCount,
          childrenAccommodationCount,
          hotelData
        )
      );
    }
  }, [childrenAccommodationCount, adultsAccommodationCount, starAssessment]);
  return (
    <HotelHeroImageContainer>
      <Stack sx={HotelFilterPanelStyles}>
        <StarFilter
          starsValue={starAssessment}
          changeStarsValue={setStarAssessment}
        />
        <Counter
          title="Adults"
          value={adultsAccommodationCount}
          changeValue={setAdultsAccommodationCount}
        />
        <Counter
          title="Children"
          value={childrenAccommodationCount}
          changeValue={setChildrenAccommodationCount}
        />
      </Stack>
    </HotelHeroImageContainer>
  );
};
