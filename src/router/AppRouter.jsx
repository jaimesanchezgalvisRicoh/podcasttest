import { Route, Routes } from "react-router-dom";
import { Plp } from "../pages/Plp";
import { Pdp } from "../pages/Pdp";
import { DetailsEpisode } from "../components/DetailsEpisode";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Plp />} />
      <Route path="/:id" element={<Pdp />} />
      <Route path="/:id/:id" element={<DetailsEpisode />} />
    </Routes>
  );
};
