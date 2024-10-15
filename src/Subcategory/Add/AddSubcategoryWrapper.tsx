import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import AddSubcategoryForm from '../Layout/SubcategoryFormLayout';
import { useAddSubcategoryMutation } from '../../Slices/subcategorySlice';

const AddSubcategoryWrapper = ({ categoryId }: any) => {
  // console.log(categoryId, "idd")
  const [AddSubcategory] = useAddSubcategoryMutation()
  const navigate = useNavigate();

  const initialValues = {
    subcategoryName: '',
    categoryId,

  };
  const validationSchema = object({
    subcategoryName: string().required('Enter subcategory name'),
  });
  const handleSubmit = (values: any) => {
    // console.log(values, "val")
    AddSubcategory(values).then((res) => {
      console.log(values, "bal")
      console.log(res, "res")
      if (res?.data) {
        navigate('/home');
      } else {
        toast.error(res?.data?.msg);
      }
      // setSubmitting(false)
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    // enableReinitialize={true}
    >
      {(formikProp) => (
        <Form>
          <AddSubcategoryForm formikProp={formikProp} />
        </Form>
      )}
    </Formik>
  );
};

export default AddSubcategoryWrapper;








