import { useAppDispatch } from "@app/hooks";
import { useEffect } from "react";
import { setPageTitle } from "../../../features/layouts/headerSlice";
import Billing from "../../../components/pages/Billing";

const InternalPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Bills" }));
    }, []);

    return <Billing />;
};

export default InternalPage;
