import { useAppDispatch } from "@app/hooks";
import { setPageTitle } from "@features/layouts/headerSlice";
import CreateQRCodeComponent from "@components/pages/CreateQRCode";
import { useEffect } from "react";

const CreateQRCode = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Create QR Code" }));
    }, []);

    return <CreateQRCodeComponent />;
};

export default CreateQRCode;
