import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TAuthState, TAuthResponse, TUser } from "./authTypes";
import { removeAuthInLocalStorage, storeAuthInLocalStorage } from "@utils/local";

const initialState: TAuthState = {
    user: null,
    tokens: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userLoggedIn: (state, action: PayloadAction<TAuthResponse>) => {
            state.user = action.payload.user;
            state.tokens = action.payload.tokens;
            storeAuthInLocalStorage(state as any);
        },
        userLoggedOut: state => {
            removeAuthInLocalStorage();
            state.tokens = null;
            state.user = null;
        },
        setUser: (state, action: PayloadAction<TUser>) => {
            state.user = action.payload;
            storeAuthInLocalStorage(state as any);
        },
    },
});

export const { userLoggedIn, userLoggedOut, setUser } = authSlice.actions;
export default authSlice;
