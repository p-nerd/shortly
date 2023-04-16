import TabList from "./TabList";

type Props = {
    currentTab: string;
    setCurrentTab: (_: string) => void;
};

const Tab = ({ currentTab, setCurrentTab }: Props) => {
    return (
        <div className={`sticky bottom-0 my-auto flex w-full bg-base-200 py-5`}>
            <div className="flex w-full justify-between">
                <h2 className="text-xl font-bold">Create QR Code</h2>
                <TabList
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                />
                <div className="flex items-center gap-3">
                    <button className="flex rounded px-4 py-[10px] text-center text-sm font-bold hover:bg-base-100 ">
                        Cancel
                    </button>
                    <button className="flex rounded bg-primary px-4 py-[10px] text-center text-sm font-bold text-white ">
                        Create QR Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tab;
