

// import {  useDeleteCategoryMutation, useGetCategoryQuery } from '../../slice/CategorySlice'
// import CategoryListing from './CategoryListing'





// const CategoryLisitingWrapper = () => {

//  const {data, isLoading, error} = useGetCategoryQuery();

//  const [deleteCategory] = useDeleteCategoryMutation()

 
// if(isLoading){
  
//   return <p>Loading.....</p>
// }

// if(error){
//   return <p>Error loading categories</p>
// }

// const handleDeleteCategory = (_id) => {
//   deleteCategory(_id).then((res)=>{
//     console.log(res)
//   }).catch(err =>{
//     console.error("Error deleting category:", err)
//     })
// }




//   return (
//    <>
//     { data ?  <CategoryListing data={data} deleteCategory={handleDeleteCategory}  /> : <p>No categories available</p> }
//    </>
//   )
// }

// export default CategoryLisitingWrapper