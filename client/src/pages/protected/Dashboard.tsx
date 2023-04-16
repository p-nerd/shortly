import Dashboard from "@components/pages/Dashboard";
import useSetPageTitle from "@hooks/useSetPageTitle";

function InternalPage() {
    useSetPageTitle("Dashboard");

    return <Dashboard />;
}

export default InternalPage;
