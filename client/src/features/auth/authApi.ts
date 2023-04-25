import { storeAuthInLocalStorage } from "@utils/local";
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
                const result = await queryFulfilled;
                storeAuthInLocalStorage(result.data);
                dispatch(userLoggedIn(result.data));
            },
        }),
        register: builder.mutation<TAuthResponse, TRegisterRequest>({
            query: data => ({
                url: "/auth/register",
                method: "POST",
                body: data,
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                const result = await queryFulfilled;
                storeAuthInLocalStorage(result.data);
                dispatch(userLoggedIn(result.data));
            },
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
