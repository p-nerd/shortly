import { useAppDispatch } from "@app/hooks";
import { setPageTitle } from "@features/common/headerSlice";
import CreateLinkComponent from "@features/links/CreateLink";
import { useEffect } from "react";

const CreateLink = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Create Link" }));
    }, []);

    return <CreateLinkComponent />;
};

export default CreateLink;
