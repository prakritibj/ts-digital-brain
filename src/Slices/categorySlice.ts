import userApiSlice from "./apiSlice";

const AuthApi =userApiSlice.injectEndpoints({
    endpoints: (builder:any) => ({
    addCategory: builder.mutation({
        query: (userData:any) => ({
          url: "category/create",
          method: "POST",
          body: userData
        }),
      }),
      editCategory: builder.mutation({
        query: ({userData,id}) => ({
          url: `category/update/${id}`,
          method: "PATCH",
          body: userData
        })
      }),
      deleteCategory: builder.mutation({
        query: ({userData ,id}) => ({
          url: `category/delete/${id}`,
          method: "DELETE",
          body: userData
        })
      }),
      getCategory: builder.query({
        query: () => ({
          url: 'category/getAllcategory',
          method: "GET",
        
        })
      }),
    })
})
export const {useAddCategoryMutation,useEditCategoryMutation, useDeleteCategoryMutation,useGetCategoryQuery}= AuthApi
export default  AuthApi

