import { useQuery } from "@tanstack/react-query";
import { hotelDetailsUri, providerHotelListUri } from "./api.endpoints";
import { ApiKeys } from "./api.keys";
import { useGetUrlParams } from "../utils/useGetUrlParams";

export const useGetHotelList = () => {
  const { hotelsProvider } = useGetUrlParams();
  const requestUrl = providerHotelListUri(hotelsProvider);
  return useQuery(
    [`${hotelsProvider}-${ApiKeys.hotelList}`],
    () => fetch(requestUrl),
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
  return useQuery(
    [`${hotelsProvider}-${hotelId}-${ApiKeys.hotelDetails}`],
    () => fetch(requestUrl),
    {
      refetchOnWindowFocus: false,
      cacheTime: Infinity,
      staleTime: 5 * 60 * 1000,
    }
  );
};
