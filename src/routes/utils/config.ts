import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Profile from "../../pages/Profile/Profile";
import Settings from "../../pages/Settings/Settings";
import Users from "../../pages/Users/Users";

type RouteConfig = {
    path: string;
    component: React.ComponentType;
};

const config: RouteConfig[] = [
    {
        path: "/",
        component: Home
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: "profile",
        component: Profile
    },
    {
        path: "users",
        component: Users
    },
    {
        path: "settings",
        component: Settings
    }
];

export { config };