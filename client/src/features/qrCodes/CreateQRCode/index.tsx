import { useState } from "react";
import Content from "./Content";
import Customize from "./Customize";
import Preview from "./Preview";
import Tab from "./Tab";

const CreateQRCodeComponent = () => {
    const [currentTab, setCurrentTab] = useState("content");

    return (
        <div className="relative">
            <Tab currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <div className="relative flex flex-col pt-20 md:flex-row">
                <div className="w-3/5 p-4 pb-20 pt-12">
                    {currentTab === "content" ? <Content /> : <Customize />}
                </div>
                <Preview />
            </div>
        </div>
    );
};

export default CreateQRCodeComponent;
