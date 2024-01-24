import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserManagementApi = createApi({
    reducerPath: "UserManagementApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}auth/`,
        prepareHeaders: (headers) => {
            const user = localStorage.getItem("user");
            if (user) {
                const userParsed = JSON.parse(user);
                // console.log("USER PARSED ", userParsed);
                headers.set("authorization", `Bearer ${userParsed.token.access}`);
                headers.set("Content-type", "application/json");
                // // console.log(headers.get("authorization"));
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        GetUsers: builder.query({
            query: () => "users_list/"
        }),
        getProfile: builder.query({
            query: () => "get_user_profile/"
        }),
    }),


    //
});

export const {
    useGetUsersQuery,
    useGetProfileQuery
} = UserManagementApi;
