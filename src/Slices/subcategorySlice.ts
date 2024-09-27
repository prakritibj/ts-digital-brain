import userApiSlice from "./apiSlice";

const SubcategoryApi = userApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addSubcategory: builder.mutation({
      query: (subcategoryData) => ({
        url: "subcategory/create",
        method: "POST",
        body: subcategoryData
      }),
    //   invalidatesTags: ["subcategory"]
    }),
    editSubcategory: builder.mutation({
      query: ({ subcategoryData, id }) => {
        console.log(subcategoryData);
        return {
          url: `subcategory/update/${id}`,
          method: "PATCH",
          body: subcategoryData,
        };
      },
    //   invalidatesTags: ["subcategory"]
    }),
    deleteSubcategory: builder.mutation({
      query: ({ id }) => ({
        url: `subcategory/delete/${id}`,
        method: "DELETE",
      }),
    //   invalidatesTags: ["subcategory"]
    }),
    getSubcategory: builder.query({
      query: () => ({
        url: 'subcategory/getAllsubcategory',
        method: "GET",
      }),
    //   invalidatesTags: ["subcategory"]
    }),
  })
});

export const { 
useAddSubcategoryMutation,
useEditSubcategoryMutation,
useDeleteSubcategoryMutation,
useGetSubcategoryQuery
} = SubcategoryApi;

export default SubcategoryApi;
