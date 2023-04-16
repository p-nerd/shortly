import Content from "@components/pages/CreateQRCode/Content";
import Customize from "@components/pages/CreateQRCode/Customize";
import Preview from "@components/pages/CreateQRCode/Preview";
import Tab from "@components/pages/CreateQRCode/Tab";
import useSetPageTitle from "@hooks/useSetPageTitle";
import { useState } from "react";

const CreateQRCode = () => {
    useSetPageTitle("Create QR Code");

    const [currentTab, setCurrentTab] = useState("content");

    return (
        <div className="relative h-full">
            <div className="flex h-full gap-5">
                {currentTab === "content" ? <Content /> : <Customize />}
                <Preview />
            </div>
            <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
        </div>
    );
};

export default CreateQRCode;
