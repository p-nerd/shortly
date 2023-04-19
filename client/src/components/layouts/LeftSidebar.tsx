import sidebarMenus from "@routes/sidebarMenus";
import { Link, NavLink, useLocation } from "react-router-dom";
import SidebarSubmenu from "./SidebarSubmenu";

const LeftSidebar = () => {
    const location = useLocation();

    return (
        <div className="drawer-side">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
            <ul className="menu w-60 bg-base-100 pt-2 text-base-content">
                <li className="mb-2 text-xl font-semibold">
                    <Link to={"/app/dashboard"}>
                        <img
                            className="mask mask-squircle w-12"
                            src="/favicon.svg"
                            alt="ShortLy Logo"
                        />
                        ShortLy
                    </Link>
                </li>
                {sidebarMenus.map((route, k) => {
                    return (
                        <li className="" key={k}>
                            {route.submenu ? (
                                <SidebarSubmenu {...route} />
                            ) : (
                                <NavLink
                                    end
                                    to={route.path}
                                    className={({ isActive }) =>
                                        `${
                                            isActive
                                                ? "bg-base-200  font-semibold "
                                                : "font-normal"
                                        }`
                                    }
                                >
                                    {route.icon} {route.name}
                                    {location.pathname === route.path ? (
                                        <span
                                            className="absolute inset-y-0 left-0 w-1 rounded-br-md rounded-tr-md bg-primary "
                                            aria-hidden="true"
                                        ></span>
                                    ) : null}
                                </NavLink>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default LeftSidebar;
