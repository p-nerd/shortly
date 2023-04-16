import { useAppDispatch } from "@app/hooks";
import { setPageTitle } from "@features/common/headerSlice";
import CreateQRCodeComponent from "@features/qrCodes/CreateQRCode";
import { useEffect } from "react";

const CreateQRCode = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Create QR Code" }));
    }, []);

    return <CreateQRCodeComponent />;
};

export default CreateQRCode;
