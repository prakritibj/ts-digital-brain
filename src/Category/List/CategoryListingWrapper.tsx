
import { useNavigate } from 'react-router-dom';
import { useDeleteCategoryMutation,useGetCategoryQuery } from '../../Slices/categorySlice'; 

import CategoryListing from './CategoryListing'
import Loader from '../../components/Scaleton/Loader';

const CategoryLisitingWrapper = () => {
const navigate=useNavigate()
 const {data, isLoading, error} = useGetCategoryQuery();

 const [deleteCategory] = useDeleteCategoryMutation()

if(isLoading){
  
  return <Loader/>
}

if(error){
  return <p>Error loading categories</p>
}

const handleDeleteCategory = (_id : string) => {
  deleteCategory(_id).then((res)=>{
    console.log(_id,"iddk")
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



