// import React from 'react';
// import AddResourcesForm from "../Layouts/AddResourcesForm"
// import { Formik } from 'formik';
// import { useAddResourcesMutation } from '../../Slices/ResourseSlice';
// import {useParams } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function AddResourcesWrapper() {
//   const { subcategoryId } = useParams();
//   const [AddResources] = useAddResourcesMutation();

//   const initialValues = {
//     name: '',
//     resourceLink: '',
//     description: '',
//     subcategoryId: subcategoryId,
//   };

//   const handleSubmit = (values: any) => {
//     AddResources({
//       name: values.name,
//       description: values.description,
//       subcategoryId: values.subcategoryId,
//       link: values.resourceLink,
//     })
//       .then((response: any) => {
//         toast.success('Resource added successfully!');


//         console.log('Success:', response);
//       })
//       .catch((error: any) => {
//         toast.error('Failed to add resource!');
//         console.error('Failed to add resource:', error);
//       });
//   };

//   return (
//     <>
//       <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//         {formikProps => (
//           <form onSubmit={formikProps.handleSubmit}>
//             <AddResourcesForm formikProps={formikProps} />
//           </form>
//         )}
//       </Formik>
//       <ToastContainer />
//     </>
//   );
// }

// export default AddResourcesWrapper;

// ============================================================================


import React from 'react';
import AddResourcesForm from "../Layouts/AddResourcesForm";
import { Form, Formik } from 'formik';
import { useAddResourcesMutation } from '../../Slices/ResourseSlice';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetSingleSubcategoryQuery } from '../../Slices/subcategorySlice';

function AddResourcesWrapper() {
  const { id } = useParams();
  console.log(id)
  const [AddResources] = useAddResourcesMutation();
  const { data } = useGetSingleSubcategoryQuery(id)
  console.log(data, "dataa")
  const subName = data?.data?.subcategoryName

  const initialValues = {
    name: '',
    resourceLink: '',
    description: '',
    subcategoryId: id,
  };

  const handleSubmit = (values: any) => {
     console.log(values, "val")
     console.log(AddResources," ADD")
    AddResources({
      name: values.name,
      description: values.description,
      subcategoryId: values.subcategoryId,
      link: values.resourceLink,
    })
      .then((response: any) => {
        console.log(response, "res")
        toast.success('Resource added successfully!');
        console.log('Success:', response);
      })
      .catch((error: any) => {
        toast.error('Failed to add resource!');
        console.error('Failed to add resource:', error);
      });
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {formikProps => (
          <Form onSubmit={formikProps.handleSubmit}>
            <AddResourcesForm formikProps={formikProps}
              subcategoryName={subName} />
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
}

export default AddResourcesWrapper;
