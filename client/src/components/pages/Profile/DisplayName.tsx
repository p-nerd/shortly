import InputField from "@components/common/Input/InputField";
import { useState } from "react";

const DisplayName = () => {
    const [name, setName] = useState("");
    return (
        <div className="flex w-96 flex-col gap-2">
            <InputField
                label="Display Name"
                value={name}
                setValue={setName}
                type="text"
            />
            <button className="btn-wide btn">Update Display Name</button>
        </div>
    );
};

export default DisplayName;
