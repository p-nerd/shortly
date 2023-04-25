import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TAuthState, TAuthResponse } from "./authTypes";

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
        },
        userLoggedOut: state => {
            localStorage.removeItem("auth");
            state.tokens = null;
            state.user = null;
        },
    },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice;
