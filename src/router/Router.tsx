import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages/NotFoundPage";
import { HotelListPage } from "../pages/HotelListPage";
import { HotelListRoute } from "./routes";

export const Router = () => {
  return (
    <Routes>
      <Route path={HotelListRoute} element={<HotelListPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
