import { useAppSelector } from "@app/hooks";
import { TUser } from "./authTypes";

export const selectUser = (): TUser | null => {
    return useAppSelector(state => state.auth.user);
};
