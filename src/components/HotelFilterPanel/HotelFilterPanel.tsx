import React, { useEffect } from "react";
import { StarFilter } from "./StarFilter";
import { Stack } from "@mui/material";
import { Counter } from "../commons/Counter";
import { useState } from "react";
import { HotelModel } from "../../api/model/HotelModel";
import { filterHotelsByRequirements } from "./filterHotelsByRequirements";
import { HotelHeroImageContainer } from "../HotelHeroImageContainer";

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
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mx: "auto",
          border: "1px solid #000",
          p: "0.25rem",
          width: { xs: "90%", sm: "65%" },
          maxWidth: "600px",
          my: "1rem",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,rgba(0, 0, 0, 0.14) 0px 1px 1px 0px,rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
          backgroundColor: "background.default",
        }}
      >
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
