import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthenticationApi = createApi({
    reducerPath: "AuthenticationApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_BACKEND_URL}auth/`,
    }),

    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ data }) => {

                return {
                    url: "login/",
                    body: data,
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                };
            },
        }),
        register: builder.mutation({
            query: ({ data }) => {
                return {
                    url: "register/",
                    body: data,
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                    },
                };
            },
        }),
        resetPassword: builder.mutation({
            query: ({ uid, token, data }) => {
                return {
                    url: `reset_password_confirm/${uid}/${token}/`,
                    method: "POST",
                    body: data,
                };
            },
        }),

        getCountry: builder.query({
            query: () => 'https://restcountries.com/v3.1/region/africa?fields=name,flags'
        })
    }),
});

export const {
    useLoginMutation,
    useResetPasswordMutation,
    useGetCountryQuery,
    useRegisterMutation
} = AuthenticationApi;
