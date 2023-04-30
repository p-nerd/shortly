import { useUpdateMeMutation } from "@features/users/usersApi";
import { useEffect } from "react";
import { toast } from "react-toastify";

const useUpdateMe = () => {
    const [updateMe, { isLoading, isError, error, isSuccess }] = useUpdateMeMutation();

    useEffect(() => {
        if (isError) {
            toast.error(error.data.message);
        }
    }, [isError]);

    return { updateMe, isLoading, isSuccess };
};

export default useUpdateMe;
