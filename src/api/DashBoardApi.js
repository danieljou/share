import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const DashBoardApi = createApi({
    reducerPath: "DashBoardApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_BACKEND_URL}api/`,
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
        GetDashboardDataForUser: builder.query({
            query: () => "get_dashboard_data_user/"
        }),
        GetPengingRequest: builder.query({
            query: () => "get_pendeing_accounts/"
        }),
        CreateInititutionAccount: builder.mutation({
            query: (data) => {
                return {
                    url: "create_istitution_account/",
                    body: data,
                    method: 'POST',
                }
            }
        }),
        sendOtp: builder.mutation({
            query: ({ data, id }) => {
                return {
                    url: `send_otp/${id}/`,
                    body: data,
                    method: 'POST',
                }
            }
        }),
        verifyOtp: builder.mutation({
            query: ({ data, id }) => {
                return {
                    url: `verify_otp/${id}/`,
                    body: data,
                    method: 'POST',
                }
            }
        }),
        getMembers: builder.query({
            query: () => "get_members/"
        }),
    }),

    //
});

export const {
    useGetDashboardDataForUserQuery,
    useCreateInititutionAccountMutation,
    useGetPengingRequestQuery,
    useSendOtpMutation,
    useVerifyOtpMutation,
    useGetMembersQuery

} = DashBoardApi;
