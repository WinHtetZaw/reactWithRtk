import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieListApi = createApi({
  reducerPath: "movieListApi",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getPopular: builder.query({
      query: () => ``,
    }),
  }),
});

export const {} = movieListApi;
