import { userLoggedIn } from "@features/auth/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useCheckAuth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const authString = localStorage.getItem("auth");
        if (!authString) return;
        try {
            const auth = JSON.parse(authString);
            dispatch(userLoggedIn(auth));
        } catch (e: any) {
            return;
        }
    }, []);
};

export default useCheckAuth;
