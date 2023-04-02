import { useParams } from "react-router-dom";
import { UrlParams } from "./urlParams";

export const useGetUrlParams = () => {
  const params = useParams();
  return {
    hotelsProvider:
      params[UrlParams.hotelsProvider] || "Missing Url Param: Hotel Provider",
  };
};
