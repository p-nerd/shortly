import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        tokens: {},
    },
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
