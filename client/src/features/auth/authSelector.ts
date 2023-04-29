import { useAppSelector } from "@app/hooks";
import { OtherEmail, TUser } from "./authTypes";

export const selectUser = (): TUser | null => {
    return useAppSelector(state => state.auth.user);
};

export const selectOtherEmails = (): OtherEmail[] | undefined => {
    return useAppSelector(state => state.auth.user?.otherEmails);
};

export const selectEmail = (): string | undefined => {
    return useAppSelector(state => state.auth.user?.email);
};
