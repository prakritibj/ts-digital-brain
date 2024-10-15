import { object, string } from 'yup'
import { Form, Formik, FormikHelpers } from 'formik'
import { useParams } from 'react-router-dom'
// import AddSubcategoryForm from "../Layout/SubcategoryFormLayout"
import AddSubcategoryForm from '../Layout/SubcategoryFormLayout'

import { useEditSubcategoryMutation, useGetSingleSubcategoryQuery } from '../../Slices/subcategorySlice'

const EditSubcategoryWrapper = () => {
  const { id } = useParams()
  const [editSubcategory] = useEditSubcategoryMutation()
  const { data } = useGetSingleSubcategoryQuery(id)
  console.log(data,id ,"iod")

  const initialValues = {
    subcategoryName: data?.data?.subcategoryName||""  // Initialize with fetched data or empty string
  }

  const validationSchema = object({
    subcategoryName: string().required("Enter subcategory name")
  })

  const handleSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
    console.log(values, "val naimna")
    editSubcategory({ data: values, id }).then((res) => {
      
      console.log(res, "resp0")
      setSubmitting(false)
    })
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}  // Allow form reinitialization when data changes
    >
      {
        (formikProp) => (
          <Form>
            <AddSubcategoryForm buttonName={"Edit subcategory"} formikProp={formikProp} heading={"Edit subcategory"} />
          </Form>
        )
      }
    </Formik>
  )
}

export default EditSubcategoryWrapper





