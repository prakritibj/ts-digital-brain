import userApiSlice from "./apiSlice";

const AuthApi =userApiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
    addCategory: builder.mutation({
        query: (userData:any) => ({
          url: "category/create",
          method: "POST",
          body: userData
        }),
        // providesTags:["products"]
      }),
      editCategory: builder.mutation({
        query: (userData:any) => ({
          url: 'category/update/:id',
          method: "PATCH",
          body: userData
        })
      }),
      deleteCategory: builder.mutation({
        query: (userData:any) => ({
          url: 'category/delete/id',
          method: "DELETE",
          body: userData
        })
      }),
      getCategory: builder.mutation({
        query: (userData:any) => ({
          url: 'category/getAllcategory',
          method: "GET",
          body: userData
        })
      }),
    })
})
export const {useAddCategoryMutation,useEditCategoryMutation}= AuthApi
export default  AuthApi

