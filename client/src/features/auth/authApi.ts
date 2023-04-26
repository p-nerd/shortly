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
        forgotPassword: builder.mutation<void, string>({
            query: email => ({
                url: "/auth/forgot-password",
                method: "POST",
                body: { email },
            }),
        }),
        resetPassword: builder.mutation<void, { password: string; token: string }>({
            query: ({ password, token }) => ({
                url: `/auth/reset-password?token=${token}`,
                method: "POST",
                body: { password },
            }),
        }),
    }),
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
} = authApi;
