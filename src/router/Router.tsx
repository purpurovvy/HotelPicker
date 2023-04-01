import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage";
import { HotelListPage } from "../pages/HotelListPage";
import { HotelListRoute, HotelDetailsRoute } from "./routes";
import { HotelDetailsPage } from "../pages/HotelDetailsPage";

export const Router = () => {
  return (
    <Routes>
      <Route path={HotelListRoute} element={<HotelListPage />} />
      <Route path={HotelDetailsRoute} element={<HotelDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
