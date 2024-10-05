
import userApiSlice from "./apiSlice";

const AuthApi = userApiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    AddResources: builder.mutation({
        query: (body : any) => ({
            url: "/resourse/create",
            method: "POST",
            body
        }),
        invalidatesTags: ["resource"]
    }),
    GetSubcategoryResources: builder.query({
        query: (id : string) => ({
            url: `/subcategory/getSubcategoryWithResources/${id}`,
            method: "GET",            
        }),
        providesTags: ["resource", "resourcedelete", "resourceupdate"]
    }),

    DeleteResource: builder.mutation({
        query: (id : string) => ({
            url: `/resourse/delete/${id}`,
            method: "DELETE"
        }),
        invalidatesTags: ["resourcedelete"]
    }),
    GetSingleResources: builder.query({
        query: (id : string) => ({
            url: `/resourse/getSingleResousrse/${id}`,
            method: "GET"
        })
    }),
    EditResources: builder.mutation({
        query: ({data, id} : any) => ({
            url: `/resourse/update/${id}`,
            method: "PATCH",
            body: data
        }),
        invalidatesTags: ["resourceupdate"]
    })
  })
})
export const { useAddResourcesMutation,useEditResourcesMutation,useDeleteResourceMutation,useGetSingleResourcesMutation,useGetSubcategoryResourcesQuery } = AuthApi

export default AuthApi

