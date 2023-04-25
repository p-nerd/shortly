import { TAuthResponse } from "@features/auth/authTypes";

export const storeAuthInLocalStorage = (auth?: TAuthResponse) => {
    localStorage.setItem("auth", auth ? JSON.stringify(auth) : "");
};
