import { Route, Routes } from "react-router-dom";
import { Plp } from "../pages/Plp";
import { Pdp } from "../pages/Pdp";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Plp />} />
      <Route path="/:id" element={<Pdp />} />
    </Routes>
  );
};
