/** Icons are imported separately to reduce build time */
import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import DocumentDuplicateIcon from "@heroicons/react/24/outline/DocumentDuplicateIcon";
import DocumentIcon from "@heroicons/react/24/outline/DocumentIcon";
import ExclamationTriangleIcon from "@heroicons/react/24/outline/ExclamationTriangleIcon";
import KeyIcon from "@heroicons/react/24/outline/KeyIcon";
import Squares2X2Icon from "@heroicons/react/24/outline/Squares2X2Icon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import WalletIcon from "@heroicons/react/24/outline/WalletIcon";
import LinkIcon from "@heroicons/react/24/outline/LinkIcon";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import QueueListIcon from "@heroicons/react/24/outline/QueueListIcon";
import QrCodeIcon from "@heroicons/react/24/outline/QrCodeIcon";
import { ReactNode } from "react";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

export type TSubmenu = {
    path: string;
    icon: ReactNode;
    name: string;
};

const routes = [
    {
        path: "/app/dashboard",
        icon: <Squares2X2Icon className={iconClasses} />,
        name: "Dashboard",
    },
    {
        path: "",
        icon: <LinkIcon className={`${iconClasses} inline`} />,
        name: "Links",
        submenu: [
            {
                path: "/app/links/create",
                icon: <PlusIcon className={submenuIconClasses} />,
                name: "Create Link",
            },
            {
                path: "/app/links",
                icon: <QueueListIcon className={submenuIconClasses} />,
                name: "Link List",
            },
        ],
    },
    {
        path: "",
        icon: <QrCodeIcon className={`${iconClasses} inline`} />,
        name: "QR Code",
        submenu: [
            {
                path: "/app/qr-codes/create",
                icon: <PlusIcon className={submenuIconClasses} />,
                name: "Create QR Code",
            },
            {
                path: "/app/qr-codes",
                icon: <QueueListIcon className={submenuIconClasses} />,
                name: "QR Code List",
            },
        ],
    },
    {
        path: "", //no url needed as this has submenu
        icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />, // icon component
        name: "Pages", // name that appear in Sidebar
        submenu: [
            {
                path: "/login",
                icon: (
                    <ArrowRightOnRectangleIcon className={submenuIconClasses} />
                ),
                name: "Login",
            },
            {
                path: "/register", //url
                icon: <UserIcon className={submenuIconClasses} />, // icon component
                name: "Register", // name that appear in Sidebar
            },
            {
                path: "/forgot-password",
                icon: <KeyIcon className={submenuIconClasses} />,
                name: "Forgot Password",
            },
            {
                path: "/app/blank",
                icon: <DocumentIcon className={submenuIconClasses} />,
                name: "Blank Page",
            },
            {
                path: "/app/404",
                icon: (
                    <ExclamationTriangleIcon className={submenuIconClasses} />
                ),
                name: "404",
            },
        ],
    },
    {
        path: "", //no url needed as this has submenu
        icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
        name: "Settings", // name that appear in Sidebar
        submenu: [
            {
                path: "/app/settings-profile", //url
                icon: <UserIcon className={submenuIconClasses} />, // icon component
                name: "Profile", // name that appear in Sidebar
            },
            {
                path: "/app/settings-billing",
                icon: <WalletIcon className={submenuIconClasses} />,
                name: "Billing",
            },
            {
                path: "/app/settings-team", // url
                icon: <UsersIcon className={submenuIconClasses} />, // icon component
                name: "Team Members", // name that appear in Sidebar
            },
        ],
    },
];

export default routes;
