import { useNavigate, useParams } from 'react-router-dom';
import { useDeleteResourceMutation, useGetSubcategoryResourcesQuery } from '../../Slices/ResourseSlice';
import ResourcesList from "./ResourseList"
import LoadingSkeleton from '../../components/Scaleton/LoadingSkeleton';

type Props = {
  subcategoryId: string;
}

const ResourcesListingWrapper = ({ }: Props) => {
  const { subcategoryId } = useParams()

  console.log(subcategoryId, "sub")
  const { data, isLoading, error } = useGetSubcategoryResourcesQuery(subcategoryId);
  const [DeleteResource] = useDeleteResourceMutation()
  const navigate = useNavigate()

  if (isLoading) {
    return <LoadingSkeleton />

  }

  if (error) {
    return <p>Error loading resources: {error.message}</p>;
  }


  const handleDeleteResource = (_id: string) => {
    DeleteResource(_id).then((res) => {
      console.log(res)
    }).catch(err => {
      console.error("Error deleting resorces:", err)
    })
  }
  const handleEdit = (_id: any) => {
    navigate(`/edit-resource/${_id}`)
  }

  const handleNewResource = () => {
    if (subcategoryId) {
      console.log(subcategoryId, "cat")
      navigate(`/newResourse/${subcategoryId}`);

    } else {
      console.error("Subcategory ID is not defined.");
    }
  }
  return (
    <>
      {data ? <ResourcesList data={data} subcategoryId={subcategoryId} DeleteResource={handleDeleteResource} handleEdit={handleEdit} handleNewResource={handleNewResource} /> : <p>No resources found.</p>}
    </>
  );
}

export default ResourcesListingWrapper;