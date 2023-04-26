import InputField from "@components/common/Input/InputField";
import { selectUser } from "@features/auth/authSelector";
import { useUpdateUserMutation } from "@features/users/usersApi";
import toast from "@utils/toast";
import { useEffect, useState } from "react";

const DisplayName = () => {
    const [name, setName] = useState("");

    const user = selectUser();

    useEffect(() => {
        if (user) {
            setName(user.name);
        }
    }, [user]);

    const [updateUser, { isLoading, isSuccess, isError, error }] =
        useUpdateUserMutation();

    useEffect(() => {
        if (isError) {
            toast.error(error.data.message);
        }
    }, [isError]);

    useEffect(() => {
        if (isSuccess) {
            toast.success("Name Updated Successfully");
        }
    }, [isSuccess]);

    const handleUpdateDisplayName = () => {
        if (user) {
            updateUser({ id: user.id, data: { name } });
        }
    };

    return (
        <div className="flex w-96 flex-col gap-2">
            <h3 className="text-lg font-semibold">Display Name</h3>
            <InputField label="" value={name} setValue={setName} type="text" />
            <button
                disabled={isLoading}
                className="btn-wide btn"
                onClick={handleUpdateDisplayName}
            >
                Update Display Name
            </button>
        </div>
    );
};

export default DisplayName;
