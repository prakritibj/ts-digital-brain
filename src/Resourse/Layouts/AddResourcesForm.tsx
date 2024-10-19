// import React from 'react';
// import ATMTextField from '../../components/Atoms/ATMTextField/ATMTextField';

// type Props = {
//   formikProps: any; 
// };

// const AddResourcesForm = ({ formikProps }: Props) => {
//   const { values, handleChange, isSubmitting } = formikProps;
//   console.log(values, "val")

//   return (
//     <div className="p-4">
//       <div className="flex items-end gap-4">
//         <div className="w-1/3">
//           <ATMTextField
//             className="p-2 w-full"
//             label="Name"
//             name="name"
//             placeholder="Enter resource name"
//             value={values.name}
//             onChange={handleChange}
//           />
//         </div>

//         <div className="w-1/3">
//           <ATMTextField
//             className="p-2 w-full"
//             label="Add link"
//             name="resourceLink"
//             placeholder="Enter resource link"
//            value={values.resourceLink}
//             onChange={handleChange}
//           />
//         </div>
//       </div>

//       <div className="mt-4">
//         <label className="block mb-1 font-semibold">Description</label>
//         <textarea
//           className="p-2 border border-gray-300 rounded w-full outline outline-slate-200"
//           name="description"
//           placeholder="Enter resource description"
//           value={values.description}
//           onChange={handleChange}
//         />
//       </div>

//       <div className="mt-4">
//         <button
//           type="submit"
//           disabled={isSubmitting}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddResourcesForm;

// ===========================================================================================================
// ?===============================================================================================


import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { FaLink, FaRegFileAlt, FaPen } from 'react-icons/fa';
type Props = {
  formikProps: any;
  subcategoryName: string; // Add subcategoryName prop
};

const AddResourcesForm = ({ formikProps, subcategoryName }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* <h2 className="text-2xl font-semibold mb-4" >{subcategoryName}</h2> */}
      {/* Your form fields go here */}
      <div className="space-y-4 w-full max-w-md p-4 bg-white rounded shadow-md">
       {subcategoryName && <h2 className='font-bold px-3 py-4 text-slate-600 '>{subcategoryName}</h2>} 
        <div className="flex items-center border p-2 rounded-md">
          <FaPen className="mr-2" />
          <Field
            type="text"
            id="name"
            name="name"
            placeholder="Resource Name"
            className="flex-grow border-none focus:outline-none"
          />
        </div>
        <ErrorMessage name="name" component="div" className="text-red-500" />

        <div className="flex items-center border p-2 rounded-md">
          <FaLink className="mr-2" />
          <Field
            type="text"
            id="resourceLink"
            name="resourceLink"
            placeholder="Resource Link"
            className="flex-grow border-none focus:outline-none"
          />
        </div>
        <ErrorMessage name="resourceLink" component="div" className="text-red-500" />

        <div className="flex items-center border p-2 rounded-md">
          <FaRegFileAlt className="mr-2" />
          <Field
            as="textarea"
            id="description"
            name="description"
            placeholder="Description"
            className="flex-grow border-none focus:outline-none"
            rows={4}
          />
        </div>
        <ErrorMessage name="description" component="div" className="text-red-500" />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md w-full">
          Add Resource
        </button>
      </div>
    </div>
  );
};

export default AddResourcesForm;
