
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
    categoryName: ' ',
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
        toast.success("Category added successfully!")
        navigate("/home")
        setSubmitting(false)
      } else {
        toast.error(res.data.msg);
      }
    }).catch(() => {
      toast.error("An error occurred. Please try again.")
    })
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}

    >
      {(formikProp) => (
        <Form>
          <Category buttonName={"Add category"} heading={"Add category"} formikProp={formikProp} />
        </Form>
      )}
    </Formik>
  );
};

export default CategoryWrapper;

