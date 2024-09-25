import userApiSlice from "./apiSlice";

const AuthApi = userApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    addCategory: builder.mutation({
      query: (userData: any) => ({
        url: "category/create",
        method: "POST",
        body: userData
      }),
      invalidatesTags: ["category"]
    }),
    editCategory: builder.mutation({
      query: ({ userData, id}: any) => {
        console.log(userData)
        return {
          url: `category/update/${id}`,
          method: "PATCH",
          body: userData,
        }
      },
      invalidatesTags: ["category"]
    }),
    deleteCategory: builder.mutation({
      query: ({ userData, id  }: any) => ({
        url: `category/delete/${id}`,
        method: "DELETE",
        body: userData
      }),
      invalidatesTags : ["category"]
    }),
    getCategory: builder.query({
      query: () => ({
        url: 'category/getAllcategory',
        method: "GET",

      }),
      invalidatesTags : ["category"]
    }),
  })
})
export const { useAddCategoryMutation, useEditCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery } = AuthApi
export default AuthApi

