
import { object, string } from 'yup'
import { useAddCategoryMutation } from '../../Slices/categorySlice'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { Form, Formik, FormikHelpers } from 'formik'
import Subcategory from '../Layout/SubcategoryFormLayout'

interface FormValues {
  subcategoryName: string
}

const SubcategoryWrapper: React.FC = () => {
  const [AddCategory] = useAddCategoryMutation()
  const navigate = useNavigate()

  const initialValues: FormValues = {
    subcategoryName: '',
  }
  
  const validationSchema = object({
    subcategoryName: string().required('subcategory is a required field'),
  })

  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    AddCategory(values).then((res) => {
      if (res?.data?.status) {
        toast.success(res.data.msg)
        navigate('/getAllSubcategory')
      } else {
        toast.error(res.data.msg)
      }
      setSubmitting(false)
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formikProp) => (
        <Form>
        <Subcategory formikProp={formikProp} />
        </Form>
      )}
    </Formik>
  )
}

export default SubcategoryWrapper

