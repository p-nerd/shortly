import TabList from "./TabList";

type Props = {
    currentTab: string;
    setCurrentTab: (_: string) => void;
};

const Tab = ({ currentTab, setCurrentTab }: Props) => {
    const isSidebarOpen = true;

    return (
        <div
            className={`fixed left-0 top-[56px] z-30 my-auto h-20 w-full border-b bg-white p-5 ${
                isSidebarOpen ? "md:pl-[260px]" : "md:pl-[90px]"
            }`}
        >
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Create QR Code</h2>
                <TabList
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                />
                <div className="flex items-center gap-3">
                    <button className="flex rounded px-4 py-[10px] text-center text-sm font-bold hover:bg-slate-200 ">
                        Cancel
                    </button>
                    <button className="flex rounded bg-blue-600 px-4 py-[10px] text-center text-sm font-bold text-white ">
                        Create QR Code
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tab;
