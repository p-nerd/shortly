import { ChangeEventHandler, useRef, useState } from "react";

const UploadCSV = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [uploadOpen, setUploadOpen] = useState(false);

    const handleFileInputChange: ChangeEventHandler<HTMLInputElement> = event => {
        if (!event.target.files) return;
        const selectedFile = event.target.files[0];
        const reader = new FileReader();
        reader.readAsText(selectedFile);
        reader.onload = function (event) {
            const contents = event.target?.result;
            console.log(contents);
        };
    };

    return (
        <div className="flex flex-col gap-3">
            <h4 className="text-xl">CSV bulk shortening</h4>
            <p className="text-sm">
                Create a bunch of Bitly links in one sweeping step with a file upload.
                Less work for you. More time for, well, other work.
            </p>
            <div className="flex items-center gap-3">
                <input
                    onChange={() => setUploadOpen(!uploadOpen)}
                    id="upload-csv"
                    type="checkbox"
                    className="toggle-accent toggle"
                />
                <label className="text-sm" htmlFor="upload-csv">
                    Upload bulk csv file with links
                </label>
            </div>
            {uploadOpen && (
                <div className="flex flex-col gap-3">
                    <p>
                        The csv format is{" "}
                        <span className="rounded bg-base-300 px-2 py-2">
                            'link, title'
                        </span>
                    </p>
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="btn-accent btn-wide btn"
                    >
                        Upload
                    </button>
                    <input
                        accept={".csv"}
                        type="file"
                        name="csv"
                        id=""
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleFileInputChange}
                    />
                </div>
            )}
        </div>
    );
};

export default UploadCSV;
