import { MouseEventHandler } from "react";

const TabItem = ({
    label,
    isActive,
    onClick,
}: {
    label: string;
    isActive: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
    <button
        onClick={onClick}
        className={`rounded-full border-0  px-10 py-2  ${
            isActive ? "bg-base-200 shadow" : ""
        }`}
    >
        {label}
    </button>
);

const TabList = ({
    currentTab,
    setCurrentTab,
}: {
    currentTab: string;
    setCurrentTab: (_: string) => void;
}) => {
    return (
        <div className="rounded-full bg-base-300 p-[2px] text-sm font-semibold">
            <TabItem
                onClick={() => setCurrentTab("content")}
                label="Content"
                isActive={currentTab === "content"}
            />
            <TabItem
                onClick={() => setCurrentTab("customize")}
                label="Customize"
                isActive={currentTab === "customize"}
            />
        </div>
    );
};

export default TabList;
