import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TaxManagementApi = createApi({

    reducerPath: "TaxManagementApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_BACKEND_URL}api/tax/`,
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
        getRepartitionData: builder.query({
            query: (id) => `repartition/${id}/`
        }),
        reparatir: builder.mutation({
            query: (id) => {
                return {
                    url: `repartition/${id}/`,
                    method: 'POST'
                }
            }
        }),

    }),

    //
});

export const {

    useCreateTaxMutation,
    useGetTaxesQuery,
    useGetRepartitionDataQuery,
    useReparatirMutation
} = TaxManagementApi;
