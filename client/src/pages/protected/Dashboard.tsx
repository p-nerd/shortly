import { useAppDispatch } from "@app/hooks";
import { setPageTitle } from "@features/common/headerSlice";
import Dashboard from "@features/dashboard/index";
import { useEffect } from "react";

function InternalPage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Create Link" }));
    }, []);

    return <Dashboard />;
}

export default InternalPage;
