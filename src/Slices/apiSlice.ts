import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_BASE_URL }),
  // tagTypes: ['user'],
  endpoints: () => ({})
})

export default userApiSlice