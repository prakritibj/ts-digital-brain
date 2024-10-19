import { object, string } from 'yup'
import { Form, Formik, FormikHelpers } from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
// import AddSubcategoryForm from "../Layout/SubcategoryFormLayout"
import AddSubcategoryForm from '../Layout/SubcategoryFormLayout'

import { useEditSubcategoryMutation, useGetSingleSubcategoryQuery } from '../../Slices/subcategorySlice'
import { toast } from 'react-toastify'

const EditSubcategoryWrapper = () => {
  const { id } = useParams()
  const [editSubcategory] = useEditSubcategoryMutation()
  const navigate = useNavigate()
  const { data } = useGetSingleSubcategoryQuery(id)
  console.log(data, id, "iod")

  const initialValues = {
    subcategoryName: data?.data?.subcategoryName || ""  // Initialize with fetched data or empty string
  }

  const validationSchema = object({
    subcategoryName: string().required("Enter subcategory name")
  })

  const handleSubmit = (values: any, { setSubmitting }: FormikHelpers<any>) => {
    console.log(values, "val naimna")
    editSubcategory({ data: values, id }).then((res) => {
      console.log(values, "bal")
      // console.log(res, "res")
      if (res?.data) {
        toast.success("Subcategory edit successfully!");

        navigate('/home');
      } else {
        toast.error(res?.data?.msg);
      }
      setSubmitting(false)
    }).catch(() => {
      toast.error("An error occurred. Please try again.");
      setSubmitting(false);
    });
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





