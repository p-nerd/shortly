const WaysToShare = () => {
    return (
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
                        Generate a QR Code to share anywhere people can scan it
                    </label>
                </div>
            </div>
        </div>
    );
};

export default WaysToShare;
