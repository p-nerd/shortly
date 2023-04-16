import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import { TSubmenu } from "@routes/sidebar";
import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
    submenu: TSubmenu[];
    name: string;
    icon: ReactNode;
};

const SidebarSubmenu = ({ submenu: submenus, name, icon }: Props) => {
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);

    /** Open Submenu list if path found in routes, this is for directly loading submenu routes  first time */
    useEffect(() => {
        if (
            submenus.filter(m => {
                return m.path === location.pathname;
            })[0]
        )
            setIsExpanded(true);
    }, []);

    return (
        <div className="flex-col">
            {/** Route header */}
            <div className="w-full" onClick={() => setIsExpanded(!isExpanded)}>
                {icon} {name}
                <ChevronDownIcon
                    className={
                        "delay-400 float-right mt-1 h-5 w-5 transition-all duration-500  " +
                        (isExpanded ? "rotate-180" : "")
                    }
                />
            </div>

            {/** Submenu list */}
            <div className={` w-full ` + (isExpanded ? "" : "hidden")}>
                <ul className={`menu menu-compact`}>
                    {submenus.map((m, k) => {
                        return (
                            <li key={k}>
                                <Link to={m.path}>
                                    {m.icon} {m.name}
                                    {location.pathname == m.path ? (
                                        <span
                                            className="absolute inset-y-0 left-0 mb-1 mt-1 w-1 rounded-br-md rounded-tr-md bg-primary "
                                            aria-hidden="true"
                                        ></span>
                                    ) : null}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SidebarSubmenu;
