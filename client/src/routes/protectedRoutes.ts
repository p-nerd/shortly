import { lazy } from "react";

const Dashboard = lazy(() => import("@pages/protected/Dashboard"));
const Page404 = lazy(() => import("@pages/protected/404"));
const Blank = lazy(() => import("@pages/protected/Blank"));
const Team = lazy(() => import("@pages/protected/settings/Team"));
const Bills = lazy(() => import("@pages/protected/settings/Bills"));
const Profile = lazy(() => import("@pages/protected/settings/Profile"));
const CreateLink = lazy(() => import("@pages/protected/links/CreateLink"));
const CreateQRCode = lazy(() => import("@pages/protected/qrCodes/CreateQRCode"));
const LinkList = lazy(() => import("@pages/protected/links/LinkList"));

// All components mapping with path for internal routes

const protectedRoutes = [
    {
        path: "/dashboard", // the url
        component: Dashboard, // view rendered
    },
    {
        path: "/links/create",
        component: CreateLink,
    },
    {
        path: "/links/list",
        component: LinkList,
    },
    {
        path: "/qr-codes/create",
        component: CreateQRCode,
    },
    {
        path: "/settings/profile",
        component: Profile,
    },
    {
        path: "/settings/team",
        component: Team,
    },
    {
        path: "/settings/billing",
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

export default protectedRoutes;
