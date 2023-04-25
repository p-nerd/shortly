import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";
import { TAuthResponse, TLoginRequest, TRegisterRequest } from "./authTypes";

export const authApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation<TAuthResponse, TLoginRequest>({
            query: data => ({
                url: "/auth/login",
                method: "POST",
                body: data,
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify(result.data));
                    dispatch(userLoggedIn(result.data));
                } catch (e: any) {}
            },
        }),
        register: builder.mutation<TAuthResponse, TRegisterRequest>({
            query: data => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem("auth", JSON.stringify(result.data));
                    dispatch(userLoggedIn(result.data));
                } catch (e: any) {}
            },
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
