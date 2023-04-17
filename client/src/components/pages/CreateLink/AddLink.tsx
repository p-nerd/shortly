import UploadCSV from "./UploadCSV";

const AddLink = () => {
    return (
        <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">Add Link(s)</h3>
            <div className="flex w-full flex-col gap-1">
                <label htmlFor="destination" className="label">
                    Destination
                </label>
                <input
                    type="text"
                    id="destination"
                    className="input-bordered input w-full"
                    placeholder="https://example.com/my-long-url"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="title" className="label">
                    Title (optional)
                </label>
                <input type="text" id="title" className="input-bordered input w-full" />
            </div>
            <UploadCSV />
        </div>
    );
};

export default AddLink;
