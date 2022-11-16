import { Routes, Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/Home/Home";
import Layout from "../layout/Layout";
import Metrics from "@pages/Metrics/Metrics";
import Statistics from "@pages/Statistics/Statistics";
import Login from "@pages/Login/Login";
import Settings from "@pages/Settings/Settings";
import StatisticsRoot from "@pages/Statistics/StatisticsRoot";
import ClicksToConvert from "@pages/Statistics/subpages/ClicksToConvert/ClicksToConvert";

const routerConfig = (
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/metrics" element={<Metrics />} />
    <Route path="/statistics" element={<StatisticsRoot />}>
      <Route index element={<Statistics />} />
      <Route path="/statistics/clicks-to-convert" element={<ClicksToConvert />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/settings" element={<Settings />} />
  </Route>
);

const Router = () => <RouterProvider router={createBrowserRouter(createRoutesFromElements(routerConfig))} />;

export default Router;
