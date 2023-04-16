const Content = () => {
    return (
        <div className="space-y-4 ">
            <h3 className="text-3xl font-bold">Enter your destination</h3>
            <div className="flex w-full flex-col">
                <label htmlFor="destination" className="label">
                    Destination URL
                </label>
                <input
                    type="text"
                    id="destination"
                    className="input-bordered input w-full"
                    placeholder="https://example.com/my-long-url"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="title" className="label">
                    Title (optional)
                </label>
                <input
                    type="text"
                    id="title"
                    className="input-bordered input w-full"
                />
            </div>
            <h3 className="text-1xl font-bold">Short link</h3>
            <p className="text-sm">
                The short link directs users to the website or content linked to
                your QR Code. If you update the short link after creating the QR
                Code it will change the code.
            </p>
            <div className="flex items-center gap-3">
                <div className="flex w-1/2 flex-col gap-2">
                    <label htmlFor="domain" className="text-sm">
                        Domain
                    </label>
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
                <div className="flex w-1/2 flex-col gap-2">
                    <label htmlFor="custom-back-half" className="pl-4 text-sm">
                        Custom back-half (Optional)
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
    );
};

export default Content;
