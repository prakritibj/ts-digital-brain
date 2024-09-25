import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApiSlice = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL ,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("x-access-token", token);
      }
      return headers;
    },
  }),
  tagTypes: ['category'],
  endpoints: () => ({})
})

export default userApiSlice