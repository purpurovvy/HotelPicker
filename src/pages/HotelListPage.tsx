import { useGetHotelList } from "../api/api.hookCalls";
import { useEffect, useState } from "react";
import { HotelFilterPanel } from "../components/HotelFilterPanel/HotelFilterPanel";
import { HotelModel } from "../api/model/HotelModel";
import { SplashScreen } from "../components/commons/SplashScreen/SplashScreen";
import { PageLayout } from "../layout/PageLayout";
import { HotelList } from "../components/HotelList/HotelList";
import { UnknownError } from "../components/commons/UnknownError";

export const HotelListPage = (): JSX.Element => {
  const {
    data: hotelApiData,
    isSuccess,
    isLoading,
    isError,
  } = useGetHotelList();
  const [hotelFilteredData, setHotelFilteredData] = useState<HotelModel[] | []>(
    []
  );

  useEffect(() => {
    if (isSuccess) {
      setHotelFilteredData(hotelApiData);
    }
  }, [isSuccess]);

  return (
    <PageLayout>
      <SplashScreen isVisible={isLoading} />
      {hotelApiData && (
        <>
          <HotelFilterPanel
            hotelData={hotelApiData}
            setHotelData={setHotelFilteredData}
          />
          <HotelList hotelData={hotelFilteredData} />
        </>
      )}
      {isError && <UnknownError />}
    </PageLayout>
  );
};
