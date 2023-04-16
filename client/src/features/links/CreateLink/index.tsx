const CreateLinkComponent = () => {
    return (
        <div className="flex flex-col justify-between gap-10 duration-300">
            <div className="flex flex-col gap-5">
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
                    <input
                        type="text"
                        id="title"
                        className="input-bordered input w-full"
                    />
                </div>
                <div className="flex items-center gap-3">
                    <input
                        id="utm-checkbox"
                        type="checkbox"
                        className="toggle-accent toggle"
                        defaultChecked
                    />
                    <label className="text-sm" htmlFor="utm-checkbox">
                        Add UTMs to track web traffic in analytics tools
                    </label>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold">Ways to share</h2>
                <div className="flex flex-col gap-2">
                    <h3 className="text-1xl font-semibold">Short link</h3>
                    <div className="flex items-center gap-3">
                        <div className="flex w-full flex-col gap-2">
                            <label htmlFor="domain">Domain</label>
                            <select
                                id="domain"
                                className="select-success select select-sm w-full"
                            >
                                <option>bit.ly</option>
                                <option>Marge</option>
                                <option>Bart</option>
                                <option>Lisa</option>
                                <option>Maggie</option>
                            </select>
                        </div>
                        <div className="flex w-full flex-col gap-2">
                            <label htmlFor="custom-back-half" className="pl-4">
                                Custom back-half (optional)
                            </label>
                            <div className="flex items-center gap-2">
                                <span>/</span>
                                <input
                                    type="text"
                                    id="custom-back-half"
                                    className="input-bordered input input-sm w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">QR Code (optional)</h3>
                    <div className="flex items-center gap-2">
                        <input
                            id="generate-qr-code"
                            type="checkbox"
                            className="toggle-accent toggle"
                            defaultChecked
                        />
                        <label htmlFor="generate-qr-code" className="text-sm">
                            Generate a QR Code to share anywhere people can scan
                            it
                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold">
                        Link-in-bio (optional)
                    </h3>
                    <div className="flex items-center gap-2">
                        <input
                            id="link-to-bio"
                            type="checkbox"
                            className="toggle-accent toggle"
                            defaultChecked
                        />
                        <label htmlFor="link-to-bio" className="text-sm">
                            Add this link to your Link-in-bio page for people to
                            easily find
                        </label>
                    </div>
                </div>
            </div>
            <div className="sticky bottom-0 flex w-full justify-end gap-5 py-2 pr-2">
                <button className="btn">Cancel</button>
                <button className="btn-primary btn">Create</button>
            </div>
        </div>
    );
};

export default CreateLinkComponent;
