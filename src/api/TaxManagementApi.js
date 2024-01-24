import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TaxManagementApi = createApi({
    reducerPath: "TaxManagementApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BACKEND_URL}api/tax/`,
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

        createTax: builder.mutation({
            query: ({ data }) => {
                return {
                    url: `create_tax/`,
                    body: data,
                    method: 'POST',
                }
            }
        }),
        getTaxes: builder.query({
            query: () => 'get_taxes/'
        }),

    }),

    //
});

export const {

    useCreateTaxMutation,
    useGetTaxesQuery
} = TaxManagementApi;
