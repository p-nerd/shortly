import { createSlice } from "@reduxjs/toolkit";

export type Token = {
    token: string;
    expires: Date;
};

export type User = {
    name: string;
    email: string;
    role: "user" | "admin";
    isEmailVerified: boolean;
    id: string;
};

type InitialState = {
    user?: User;
    tokens?: {
        access: Token;
        refresh: Token;
    };
};

const initialState: InitialState = {};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            localStorage.setItem("auth", JSON.stringify(action.payload));
            state.user = action.payload.user;
            state.tokens = action.payload.tokens;
        },
    },
});

export const { setAuth } = authSlice.actions;
export default authSlice;
