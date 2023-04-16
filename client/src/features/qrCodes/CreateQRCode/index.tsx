import { useState } from "react";
import Content from "./Content";
import Customize from "./Customize";
import Preview from "./Preview";
import Tab from "./Tab";

const CreateQRCodeComponent = () => {
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

export default CreateQRCodeComponent;
