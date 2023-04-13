import { useQuery } from "@tanstack/react-query";
import { hotelDetailsUri, providerHotelListUri } from "./api.endpoints";
import { ApiKeys } from "./api.keys";
import { useGetUrlParams } from "../utils/useGetUrlParams";
import { HotelAccommodationDto } from "./dto/HotelAccommodationDto";
import { fetchData } from "./api.calls";
import { HotelModel } from "./model/HotelModel";
import { HotelDto } from "./dto/HotelDto";

export const useGetHotelList = () => {
  const { hotelsProvider } = useGetUrlParams();
  const requestUrl = providerHotelListUri(hotelsProvider);
  return useQuery<HotelDto[], Error, HotelModel[]>(
    [`${hotelsProvider}-${ApiKeys.hotelList}`],
    () =>
      fetchData<HotelDto[]>(requestUrl).then((hotels) => {
        return Promise.all(
          hotels.map((hotel) => {
            return fetchData<HotelAccommodationDto>(
              hotelDetailsUri(hotelsProvider, hotel.id)
            ).then((hotelAccommodation) => {
              return {
                ...hotel,
                starRating: Number(hotel.starRating),
                hotelAccommodation,
              };
            });
          })
        );
      }),
    {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      staleTime: 15 * 60 * 1000,
    }
  );
};
