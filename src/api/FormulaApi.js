import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FormulaApi = createApi({
  reducerPath: "FormulaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BACKEND_URL}api/formula/`,
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
    GetFormulas: builder.query({
      query: () => "get_formulas/"
    }),
    GetSingleFormula: builder.query({
      query: (id) => `get_single_formula/${id}/`
    }),
    GetFormulesForFormula: builder.query({
      query: (id) => `get_formule_for_formula/${id}/`
    }),
    AddFormula: builder.mutation({
      query: (data) => {
        return {
          url: 'add_formulas/',
          method: 'POST',
          body: data
        }
      }
    }),
    AddFormule: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `add_formule/${id}/`,
          method: 'POST',
          body: data
        }
      }
    }),



  }),

  //
});

export const {
  useGetFormulasQuery,
  useGetSingleFormulaQuery,
  useGetFormulesForFormulaQuery,
  useAddFormulaMutation,
  useAddFormuleMutation
} = FormulaApi;
