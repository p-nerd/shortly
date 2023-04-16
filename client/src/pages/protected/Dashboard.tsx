import { useAppDispatch } from "@app/hooks";
import Dashboard from "@components/pages/Dashboard";
import { setPageTitle } from "@features/layouts/headerSlice";
import { useEffect } from "react";

function InternalPage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Create Link" }));
    }, []);

    return <Dashboard />;
}

export default InternalPage;
