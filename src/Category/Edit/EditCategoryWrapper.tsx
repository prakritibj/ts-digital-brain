
import { useEditCategoryMutation, useGetSingleCategoryQuery } from '../../Slices/categorySlice';
import { useNavigate, useParams } from 'react-router-dom';
import Category from '../Layouts/CategoryFormLayout';
import { Formik,Form, FormikHelpers } from 'formik';
import { object, string } from 'yup';
import { toast } from 'react-toastify';

const EditCategoryWrapper = () => {

  const {id} = useParams()
  const [editCategory] =useEditCategoryMutation()
  const {data}= useGetSingleCategoryQuery(id)
  // console.log(data, "kjncb")
  const navigate = useNavigate();

const initialValues = {
  categoryName: data?.data?.categoryName
}
const validationSchema = object({
  categoryName: string().required("Category is a required field")
})

const handleSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
  editCategory({userData: values,id}).then ((res)=>{
    if (res) {
      toast.success('Category edited successfully!');
      navigate('/home');
    }
  })
  .catch(() => {
    toast.error('Failed to edit category. Please try again.');
  })
  .finally(() => {
    setSubmitting(false);
  });
    // console.log(res)
  // })
}

  return (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    enableReinitialize={true}
  > 
  {
    (formikProp) => {
      return (
      <Form>
         <Category buttonName={'Edit category'} formikProp={formikProp} heading={'Edit category'}/>
          </Form>
      )
    }
  }
  </Formik>   
  )
}

export default EditCategoryWrapper

