import { useAppDispatch } from "@app/hooks";
import { showNotification } from "@features/layouts/headerSlice";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import AmountStats from "./AmountStats";
import BarChart from "./BarChart";
import DashboardStats from "./DashboardStats";
import DashboardTopBar from "./DashboardTopBar";
import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";
import PageStats from "./PageStats";
import UserChannels from "./UserChannels";

const statsData = [
    {
        title: "New Users",
        value: "34.7k",
        icon: <UserGroupIcon className="h-8 w-8" />,
        description: "↗︎ 2300 (22%)",
    },
    {
        title: "Total Sales",
        value: "$34,545",
        icon: <CreditCardIcon className="h-8 w-8" />,
        description: "Current month",
    },
    {
        title: "Pending Leads",
        value: "450",
        icon: <CircleStackIcon className="h-8 w-8" />,
        description: "50 in hot leads",
    },
    {
        title: "Active Users",
        value: "5.6k",
        icon: <UsersIcon className="h-8 w-8" />,
        description: "↙ 300 (18%)",
    },
];

const Dashboard = () => {
    const dispatch = useAppDispatch();

    const updateDashboardPeriod = (newRange: string) => {
        // Dashboard range changed, write code to refresh your values
        dispatch(
            showNotification({
                message: `Period updated to ${newRange}`,
                status: 1,
            })
        );
    };
    return (
        <>
            {/** ---------------------- Select Period Content ------------------------- */}
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

            {/** ---------------------- Different stats content 1 ------------------------- */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {statsData.map((d, k) => {
                    return <DashboardStats key={k} {...d} colorIndex={k} />;
                })}
            </div>

            {/** ---------------------- Different charts ------------------------- */}
            <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <LineChart />
                <BarChart />
            </div>

            {/** ---------------------- Different stats content 2 ------------------------- */}

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <AmountStats />
                <PageStats />
            </div>

            {/** ---------------------- User source channels table  ------------------------- */}

            <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <UserChannels />
                <DoughnutChart />
            </div>
        </>
    );
};

export default Dashboard;