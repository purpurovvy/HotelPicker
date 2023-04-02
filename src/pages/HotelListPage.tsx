import { useGetHotelList } from "../api/api.calls";

export const HotelListPage = (): JSX.Element => {
  const { isLoading, data } = useGetHotelList();
  if (isLoading) {
    return <>Loading...</>;
  }
  console.log(data);
  return <p>HotelListPage</p>;
};
