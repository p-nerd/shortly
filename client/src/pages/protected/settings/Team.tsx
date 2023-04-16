import { useAppDispatch } from "@app/hooks";
import Team from "@components/pages/Team";
import { setPageTitle } from "@features/layouts/headerSlice";
import { useEffect } from "react";

function InternalPage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Team Members" }));
    }, []);

    return <Team />;
}

export default InternalPage;
