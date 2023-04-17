import AddLink from "@components/pages/CreateLink/AddLink";
import WaysToShare from "@components/pages/CreateLink/WaysToShare";
import useSetPageTitle from "@hooks/useSetPageTitle";

const CreateLink = () => {
    useSetPageTitle("Create Link");

    return (
        <div className="relative flex h-full flex-col justify-between gap-10 duration-300">
            <div className="mb-10 flex h-full w-full flex-col gap-14">
                <AddLink />
                <WaysToShare />
                <div className="sticky bottom-0 flex justify-end gap-5 bg-base-200 py-2">
                    <button className="btn">Cancel</button>
                    <button className="btn-primary btn">Create</button>
                </div>
            </div>
        </div>
    );
};

export default CreateLink;
