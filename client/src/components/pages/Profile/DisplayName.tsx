import InputField from "@components/common/Input/InputField";
import toast from "@utils/toast";
import { useState } from "react";

const DisplayName = () => {
    const [name, setName] = useState("");

    const handleUpdateDisplayName = () => {
        toast.success("Name Updated Successfully");
    };

    return (
        <div className="flex w-96 flex-col gap-2">
            <h3 className="text-lg font-semibold">Display Name</h3>
            <InputField label="" value={name} setValue={setName} type="text" />
            <button className="btn-wide btn" onClick={handleUpdateDisplayName}>
                Update Display Name
            </button>
        </div>
    );
};

export default DisplayName;
