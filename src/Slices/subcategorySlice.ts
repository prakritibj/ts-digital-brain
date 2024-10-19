import userApiSlice from "./apiSlice";

const AuthApi = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    AddSubcategory: builder.mutation({
      query: (subcategoryData) => ({
        url: "subcategory/createsubcategory",
        method: "POST",
        body: subcategoryData
      }),
      invalidatesTags: ['subcategory']
    }),
    editSubcategory: builder.mutation({
      query: ({ data, id }) => {
        console.log(data);
        return {
          url: `subcategory/update/${id}`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["subcategory"]
    }),
    deleteSubcategory: builder.mutation({
      query: (id) => ({
        url: `subcategory/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["subcategory"]
    }),
    getSubcategory: builder.query({
      query: () => ({
        url: 'category/getAllCategories',
        method: "GET",
      }),
      providesTags: ["subcategory"]
    }),
    getSingleSubcategory: builder.query({
      query: (id) => ({
        url: `subcategory/getSingleSubCategory/${id}`,
        method: "GET",
      }),
      providesTags: ["subcategory"]
    }),
  })
});

export const {
  useAddSubcategoryMutation,
  useEditSubcategoryMutation,
  useDeleteSubcategoryMutation,
  useGetSubcategoryQuery,
  useGetSingleSubcategoryQuery
} = AuthApi;

export default AuthApi;
