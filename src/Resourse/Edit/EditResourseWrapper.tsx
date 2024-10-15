import React from 'react';
// import AddResourcesForm from '../layout/AddResourcesForm';
import AddResourcesForm from '../Layouts/AddResourcesForm';
import { Formik, FormikHelpers } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditResourcesMutation,useGetSingleResourcesQuery} from '../../Slices/ResourseSlice';



function EditResourcesWrapper() {
  const {id} = useParams()
  const[EditResources] =  useEditResourcesMutation()
  const {data} = useGetSingleResourcesQuery(id)
  const navigate = useNavigate()
  
  const initialValues = {
    name: data?.data.name || "",
    resourceLink: data?.data.link || "",
    description: data?.data.description || "",
    
  };

  const handleSubmit = (values: any, {setSubmitting}: FormikHelpers<any>) => {
    EditResources({ data: values, id })
      .then((response: any) => {
        if(response){
          navigate("/home")
        }
        console.log('Success:', response);
        setSubmitting(false)
      })
      .catch((error: any) => {
        console.error('Failed to add resource:', error);
      });
  };

  return (
    <Formik initialValues={initialValues}
     onSubmit={handleSubmit}
     enableReinitialize={true}
     >
      {formikProps => (
        <form onSubmit={formikProps.handleSubmit}>
          <AddResourcesForm buttonName={"Edit resource"} heading={"Edit resource"} formikProps={formikProps} />
        </form>
      )}
    </Formik>
  );
}

export default EditResourcesWrapper;