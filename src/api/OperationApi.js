import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const OperationApi = createApi({
    reducerPath: "OperationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}api/operations/`,
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
        getOwnOperations: builder.query({
            query: () => 'get_all_my_operations/'
        }),
        getSpecificOperation: builder.query({
            query: (id) => `operations/details/${id}/get_opeation_detail/`
        }),
    }),


    //
});

export const {

    useGetOwnOperationsQuery,
    useGetSpecificOperationQuery
} = OperationApi;
