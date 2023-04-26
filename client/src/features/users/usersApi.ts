import { setUser } from "@features/auth/authSlice";
import { TUser } from "@features/auth/authTypes";
import apiSlice from "../api/apiSlice";
import { TUserRequest } from "./usersTypes";

export const usersApi = apiSlice.injectEndpoints({
    endpoints: builder => ({
        updateMe: builder.mutation<TUser, TUserRequest>({
            query: data => ({
                url: `/users/me`,
                method: "PATCH",
                body: data,
            }),
            onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
                const { data } = await queryFulfilled;
                dispatch(setUser(data));
            },
        }),
        // createUser: builder.mutation<TUserResponse, TUserRequest>({
        //     query: data => ({
        //         url: "/users",
        //         method: "POST",
        //         body: data,
        //     }),
        //     onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        //         // const { data: task } = await queryFulfilled;
        //         // dispatch(
        //         //     apiSlice.util.updateQueryData("getTasks", undefined, draft => {
        //         //         draft.push(task);
        //         //     })
        //         // );
        //     },
        // }),
        // fetchUsers: builder.query<TUserResponse[], void>({
        //     query: () => "/users",
        //     transformResponse: (response: TUserResponse[]) => response,
        // }),
        // deleteUser: builder.mutation<void, number>({
        //     query: id => ({
        //         url: `/users/${id}`,
        //         method: "DELETE",
        //     }),
        //     onQueryStarted: async (_, { dispatch, queryFulfilled, queryRejectValue }) => {
        //         try {
        //             await queryFulfilled;
        //             dispatch(usersSlice.actions.deleteUser(id));
        //         } catch (error) {
        //             dispatch(usersSlice.actions.deleteUserFailed(error as string));
        //             return queryRejectValue;
        //         }
        //     },
        // }),
    }),
});

export const { useUpdateMeMutation } = usersApi;

export default usersApi;
