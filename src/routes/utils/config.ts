import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Metrics from "../../pages/Metrics/Metrics";
import Settings from "../../pages/Settings/Settings";
import Statistics from "../../pages/Statistics/Statistics";

type RouteConfig = {
  path: string;
  component: React.ComponentType;
};

const config: RouteConfig[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/metrics",
    component: Metrics,
  },
  {
    path: "/statistics",
    component: Statistics,
  },
];

export { config };
