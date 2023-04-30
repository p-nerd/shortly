import InputField from "@components/common/Input/InputField";
import ErrorText from "@components/common/Typography/ErrorText";
import { useState } from "react";

const ChangePassword = () => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="flex w-1/2 flex-col gap-2">
            <h3 className="text-lg font-semibold">Change password</h3>
            <p className="text-sm">
                You will be required to login after changing your password
            </p>
            <InputField
                label={"Current password"}
                value={currentPassword}
                setValue={setCurrentPassword}
            />
            <InputField
                label={"New password"}
                value={newPassword}
                setValue={setNewPassword}
            />
            <ErrorText message={"Password must be at least 6 characters."} />
            <InputField
                label={"Confirm new password"}
                value={confirmPassword}
                setValue={setConfirmPassword}
            />
            <button className="btn-wide btn">Change password</button>
        </div>
    );
};

export default ChangePassword;
