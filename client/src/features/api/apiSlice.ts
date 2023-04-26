import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@utils/env";
import { RootState } from "@app/store";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: async (headers, { getState }: any) => {
        // const token = getState()?.auth?.tokens.access.token;
        const token = getState()?.auth?.tokens?.access?.token;
        console.log("Hello", token);
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
    endpoints: _builder => ({}),
});

export default apiSlice;
