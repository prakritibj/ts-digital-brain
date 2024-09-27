// import { object, string } from 'yup'
// import { useAddCategoryMutation } from '../../Slices/categorySlice'
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';
// import { Form, Formik } from 'formik'
// import Category from '../Layouts/CategoryFormLayout'

// const CategoryWrapper = () => {

//   const [AddCategory] = useAddCategoryMutation()
//   const navigate = useNavigate()


//   const initialValues = {
//     categoryName: ""
//   }
//   const validationSchema = object({
//     categoryName: string().required("Category is a required field")
//   })

//   const handleSubmit = (values: any) => {
//     AddCategory(values).then((res) => {
//       // console.log(res.data.status)
//       if (res?.data?.status) {
//         toast.success(res.data.msg)
//         navigate("/getAllcategory")
//       } else {
//         toast.error(res.data.msg)

//       }

//     })
//   }

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {
//         (formikProp) => {
//           return (
//             <Form> <Category formikProp={formikProp} /> </Form>
//           )
//         }
//       }
//     </Formik>
//   )
// }

// export default CategoryWrapper

// ==========================================================

import { object, string } from 'yup';
import { useAddCategoryMutation } from '../../Slices/categorySlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Formik, FormikHelpers } from 'formik';
import Category from '../Layouts/CategoryFormLayout';

interface FormValues {
  categoryName: string;
}

const CategoryWrapper: React.FC = () => {
  const [AddCategory] = useAddCategoryMutation();
  const navigate = useNavigate();

  const initialValues: FormValues = {
    categoryName: '',
  };
  

  const validationSchema = object({
    categoryName: string().required('Category is a required field'),
  });

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    AddCategory(values).then((res) => {
      if (res?.data?.status) {
        toast.success(res.data.msg);
        navigate('/getAllcategory');
      } else {
        toast.error(res.data.msg);
      }
      setSubmitting(false)
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProp) => (
        <Form>
          <Category formikProp={formikProp} />
        </Form>
      )}
    </Formik>
  );
};

export default CategoryWrapper;

