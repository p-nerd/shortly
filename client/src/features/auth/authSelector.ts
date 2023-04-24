import { useAppSelector } from "@app/hooks";
import { User } from "./authSlice";

export const selectUser = (): User | undefined => {
    return useAppSelector(state => state.auth.user);
};
