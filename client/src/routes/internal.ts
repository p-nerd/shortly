// All components mapping with path for internal routes

import { lazy } from "react";

const Dashboard = lazy(() => import("@pages/protected/Dashboard"));
const Page404 = lazy(() => import("@pages/protected/404"));
const Blank = lazy(() => import("@pages/protected/Blank"));
const Team = lazy(() => import("@pages/protected/Team"));
const Bills = lazy(() => import("@pages/protected/Bills"));
const ProfileSettings = lazy(() => import("@pages/protected/ProfileSettings"));
const CreateLink = lazy(() => import("@pages/protected/CreateLink"));
const CreateQRCode = lazy(() => import("@pages/protected/CreateQRCode"));

const routes = [
    {
        path: "/dashboard", // the url
        component: Dashboard, // view rendered
    },
    {
        path: "/links/create",
        component: CreateLink,
    },
    {
        path: "/qr-codes/create",
        component: CreateQRCode,
    },
    {
        path: "/settings-team",
        component: Team,
    },
    {
        path: "/settings-profile",
        component: ProfileSettings,
    },
    {
        path: "/settings-billing",
        component: Bills,
    },
    {
        path: "/404",
        component: Page404,
    },
    {
        path: "/blank",
        component: Blank,
    },
];

export default routes;
