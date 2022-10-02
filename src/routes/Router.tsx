import { config } from "./utils/config";
import { FC } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";

type RouterProps = {};

const Router: FC<RouterProps> = () => {
  return (
    <Routes>
      {config.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))
      }
    </Routes>
  );
};

export default Router;