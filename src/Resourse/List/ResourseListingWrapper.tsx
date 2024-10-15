import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteResourceMutation,useGetSubcategoryResourcesQuery } from '../../Slices/ResourseSlice';
import ResourcesList from "./ResourseList"

type Props = {
  subcategoryId: string; 
}

const ResourcesListingWrapper = ({}: Props) => {
  const {subcategoryId} =   useParams()
  
 
  const { data, isLoading, error } = useGetSubcategoryResourcesQuery(subcategoryId);
  const [DeleteResource] = useDeleteResourceMutation()
 const navigate = useNavigate()

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading resources: {error.message}</p>;
  }


  const handleDeleteResource = (_id : any) => {
    DeleteResource(_id).then((res)=>{
      console.log(res)
    }).catch(err =>{
      console.error("Error deleting resorces:", err)
      })
  }
 const handleEdit = (_id: any) => {
  navigate(`/edit-resource/${_id}`)
 }


  return (
    <> 
      {data ? <ResourcesList data={data} subcategoryId={subcategoryId} DeleteResource={handleDeleteResource} handleEdit={handleEdit} /> : <p>No resources found.</p>}
    </>
  );
}

export default ResourcesListingWrapper;