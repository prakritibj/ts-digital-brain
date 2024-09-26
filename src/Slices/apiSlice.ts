import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApiSlice = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL ,
    prepareHeaders: (headers , {endpoint}) => {
      console.log(endpoint)
      const token = localStorage.getItem("token");
      if (token && endpoint !== "login" ){
        headers.set("x-access-token", token);
      }
      return headers;
    },
  }),
  tagTypes: ['category'],
  endpoints: () => ({})
})

export default userApiSlice