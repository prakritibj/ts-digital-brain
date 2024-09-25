
import { useEditCategoryMutation } from '../../Slices/categorySlice';
import { useParams, useSearchParams } from 'react-router-dom';
import Category from '../Layouts/CategoryFormLayout';
import { Formik,Form } from 'formik';
import { object, string } from 'yup';

const EditCategoryWrapper = () => {

  const {id} = useParams()
  const  [queryParams] = useSearchParams()
  // const categoryName = queryParams.get("categoryName")
  const [editCategory] =useEditCategoryMutation()

const initialValues = {
  categoryName: queryParams.get("categoryName")
}
const validationSchema = object({
  categoryName: string().required("Category is a required field")
})

const handleSubmit = (values: any) => {
  editCategory({userData: values,id}).then ((res)=>{
    console.log(res)
  })
}

  return (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
  > 
  {
    (formikProp) => {
      return (
      <Form> <Category formikProp = {formikProp} /> </Form>
      )
    }
  }
  </Formik>   
  )
}

export default EditCategoryWrapper



