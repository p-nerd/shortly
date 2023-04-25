import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@utils/env";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers, { getState }: any) => {
        const token = getState()?.auth?.accessToken;
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: (async (args: any, api: any, extraOptions: any) => {
        const result = await baseQuery(args, api, extraOptions);
        return result;
    }) as any,
    tagTypes: [""],
    endpoints: builder => ({}),
});

export default apiSlice;
