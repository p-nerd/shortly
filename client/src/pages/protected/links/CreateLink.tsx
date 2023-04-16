import { useAppDispatch } from "@app/hooks";
import { setPageTitle } from "@features/layouts/headerSlice";
import CreateLinkComponent from "@components/pages/CreateLink";
import { useEffect } from "react";

const CreateLink = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Create Link" }));
    }, []);

    return <CreateLinkComponent />;
};

export default CreateLink;
