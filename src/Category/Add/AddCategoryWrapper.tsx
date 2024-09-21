import { object, string } from 'yup'
import { useAddCategoryMutation } from '../../Slices/categorySlice' 
import { Form, Formik } from 'formik'
import Category from '../Layouts/CategoryFormLayout'

const CategoryWrapper = () => {

const [AddCategory] = useAddCategoryMutation()

const initialValues = {
  categoryName: ""
}
const validationSchema = object({
  categoryName: string().required("Category is a required field")
})

const handleSubmit = (vlaues: any) => {
  AddCategory(vlaues).then ((res)=>{
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

export default CategoryWrapper

