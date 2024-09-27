
import { useParams, useSearchParams } from 'react-router-dom';
import Subcategory from '../Layout/SubcategoryFormLayout';
import { Formik,Form } from 'formik';
import { object, string } from 'yup';
import { useEditSubcategoryMutation } from '../../Slices/subcategorySlice';

const EditSubCategoryWrapper = () => {

  const {id} = useParams()
  const  [queryParams] = useSearchParams()
  const [ editSubcategory] = useEditSubcategoryMutation()

const initialValues = {
 subcategoryName: queryParams.get("categoryName")
}
const validationSchema = object({
 subcategoryName: string().required("Category is a required field")
})

const handleSubmit = (values: any) => {
    editSubcategory({userData: values,id}).then ((res)=>{
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
      <Form> < Subcategory formikProp = {formikProp} /> </Form>
      )
    }
  }
  </Formik>   
  )
}

export default EditSubCategoryWrapper 



