import { useAppDispatch } from "@app/hooks";
import ProfileSettings from "@components/pages/ProfileSettings";
import { setPageTitle } from "@features/layouts/headerSlice";
import { useEffect } from "react";

function InternalPage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Settings" }));
    }, []);

    return <ProfileSettings />;
}

export default InternalPage;
