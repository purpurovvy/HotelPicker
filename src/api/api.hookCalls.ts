import { useQuery } from "@tanstack/react-query";
import { hotelDetailsUri, providerHotelListUri } from "./api.endpoints";
import { ApiKeys } from "./api.keys";
import { useGetUrlParams } from "../utils/useGetUrlParams";
import { HotelAccommodationDto } from "./dto/HotelAccommodationDto";
import { fetchData } from "./api.calls";
import { HotelListModel } from "./model/HotelListModel";
import { HotelAccommodationModel } from "./model/HotelAccommodationModel";

export const useGetHotelList = () => {
  const { hotelsProvider } = useGetUrlParams();
  const requestUrl = providerHotelListUri(hotelsProvider);
  return useQuery<HotelAccommodationDto[], Error, HotelListModel[]>(
    [`${hotelsProvider}-${ApiKeys.hotelList}`],
    () => fetchData<HotelAccommodationDto[]>(requestUrl),
    {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      staleTime: 15 * 60 * 1000,
    }
  );
};

export const useGetHotelAccomodationDetails = (hotelId: string) => {
  const { hotelsProvider } = useGetUrlParams();
  const requestUrl = hotelDetailsUri(hotelsProvider, hotelId);
  return useQuery<HotelAccommodationDto[], Error, HotelAccommodationModel[]>(
    [`${hotelsProvider}-${hotelId}-${ApiKeys.hotelDetails}`],
    () => fetchData<HotelAccommodationDto[]>(requestUrl),
    {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      staleTime: 5 * 60 * 1000,
    }
  );
};
