
// import React from 'react'
// import Swal from 'sweetalert2'
// import { useDeleteCategoryMutation, useGetCategoryQuery, useEditCategoryMutation } from '../../Slices/categorySlice'
// import CategoryListing from './CategoryListing';

// const CategoryListingWrapper: React.FC = () => {
//   const token = localStorage.getItem("auth")
//   const { data, isLoading, error } = useGetCategoryQuery()
//   const [deleteCategory] = useDeleteCategoryMutation()
//   const [editCategory] = useEditCategoryMutation()
//   console.log(data, "data")

//   if (isLoading) {
//     return <p>Loading.....</p>
//   }
//   if (error) {
//     return <p>Error loading categories:</p>
//   }

//   const handleDeleteCategory = async (id: string) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "Do you really want to delete this category?",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!'
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           const res = await deleteCategory({ id, token })
//           console.log('Category deleted:', res)
//           Swal.fire('Deleted!', 'The category has been deleted.', 'success')
//         } catch (err) {
//           console.error("Error deleting category:", err)
//           Swal.fire('Error!', 'There was a problem deleting the category.', 'error')
//         }
//       }
//     })
//   }

//   const handleEditCategory = async (id: string, newName: string) => {
//     try {
//       const res = await editCategory({ id, newName })
//       console.log('Category edited:', res)
//     } catch (err) {
//       console.error("Error editing category:", err)
//     }
//   }

//   return (
//     <>
//       {data ? (
//         <CategoryListing 
//           data={data} 
//           deleteCategory={handleDeleteCategory} 
//           editCategory={handleEditCategory} 
//         />
//       ) : (
//         <p>No categories available</p>
//       )}
//     </>
//   )
// }

// export default CategoryListingWrapper
// ===============================================================================================================================///////////////////////////
import { useNavigate } from 'react-router-dom';
import { useDeleteCategoryMutation,useGetCategoryQuery } from '../../Slices/categorySlice'; 

import CategoryListing from './CategoryListing'

const CategoryLisitingWrapper = () => {
const navigate=useNavigate()
 const {data, isLoading, error} = useGetCategoryQuery();

 const [deleteCategory] = useDeleteCategoryMutation()


 
 
if(isLoading){
  
  return <p>Loading.....</p>
}

if(error){
  return <p>Error loading categories</p>
}

const handleDeleteCategory = (_id) => {
  deleteCategory(_id).then((res)=>{
    console.log(res)
  }).catch(err =>{
    console.error("Error deleting category:", err)
    })
}
const handleEdit=(_id)=>{
navigate(`/edit-category/${_id}`)
}



  return (
   <>
    { data ?  <CategoryListing data={data} handleEdit={handleEdit} deleteCategory={handleDeleteCategory}  /> : <p>No categories available</p> }
   </>
  )
}

export default CategoryLisitingWrapper



