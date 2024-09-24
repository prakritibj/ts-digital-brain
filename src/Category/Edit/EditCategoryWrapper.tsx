
// // import React from 'react';
// // import CategoryFormLayout from '../Layouts/CategoryFormLayout';
// // const EditCategoryWrapper: React.FC = () => {
 

  
// // const initialValues = {
// //   categoryName: ""
// // }
// //   const handleSubmit = (values: { name: string; mobile: string; address: string }) => {
// //     console.log('Category Edited:', values);
// //     // Add logic for editing a Category
// //   };

// //   return (
// //       <CategoryFormLayout
// //       initialValues={initialValues}
// //         onSubmit={handleSubmit}
// //         buttonLabel="Edit Category"
// //       />

// //   );
// // };

// // export default EditCategoryWrapper;

// // ==================================================================

import React from 'react';
import Swal from 'sweetalert2'; 
import CategoryFormLayout from '../Layouts/CategoryFormLayout';
import { useEditCategoryMutation } from '../../Slices/categorySlice';

const EditCategoryWrapper: React.FC = () => {
  const initialValues = {
    categoryName: ""
  }

  const [editCategory] =useEditCategoryMutation({userData,id})
  const handleSubmit = (values: { categoryName: string }, id : any ) => {
      editCategory(values, id).then((res)=>{
console.log(res.data, "res")
      })
    console.log('Category Edited:', values);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Category edited successfully",
      showConfirmButton: false,
      timer: 1000
    });
  };

  return (
    <CategoryFormLayout
      initialValues={initialValues}
      onSubmit={handleSubmit}
      buttonLabel="Edit Category"
    />
  );
};

export default EditCategoryWrapper;


// ======================================================================================

// import React from 'react';
// import Swal from 'sweetalert2'; 
// import CategoryFormLayout from '../Layouts/CategoryFormLayout';
// import { useEditCategoryMutation } from '../../Slices/categorySlice';

// const EditCategoryWrapper: React.FC<{ id: string }> = ({ id }) => {
//   const initialValues = {
//     categoryName: ""
//   };

//   const [editCategory] = useEditCategoryMutation();

//   const handleSubmit = async (values: { categoryName: string }) => {
//     try {
//       const res = await editCategory({ id, ...values })
//       console.log(res, "Category edited response");

//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Category edited successfully",
//         showConfirmButton: false,
//         timer: 1000
//       });
//     } catch (error) {
//       console.error("Error editing category:", error);
//       Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Something went wrong while editing the category!',
//       });
//     }
//   };

//   return (
//     <CategoryFormLayout
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       buttonLabel="Edit Category"
//     />
//   );
// };

// export default EditCategoryWrapper;
