import TabList from "./TabList";

type Props = {
    currentTab: string;
    setCurrentTab: (_: string) => void;
};

const Tab = ({ currentTab, setCurrentTab }: Props) => {
    return (
        <div className={`sticky bottom-0 my-auto flex w-full bg-base-200 py-5`}>
            <div className="flex w-full justify-between">
                <TabList
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                />
                <div className="flex items-center gap-3">
                    <button className="btn-outline btn-sm btn">Cancel</button>
                    <button className="btn-primary btn-sm btn">
                        Create QR Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tab;
