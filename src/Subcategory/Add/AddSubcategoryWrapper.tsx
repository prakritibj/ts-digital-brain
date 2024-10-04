import { object, string } from 'yup';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate} from 'react-router-dom'; 
import AddSubcategoryForm from '../Layout/SubcategoryFormLayout';
import { useAddSubcategoryMutation } from '../../Slices/subcategorySlice';

const AddSubcategoryWrapper = ({categoryId}) => {
  
  console.log(categoryId, "idd")
  const initialValues = {
    subcategoryName: '',
    categoryId,
    
  };
  const navigate = useNavigate();
  
  const validationSchema = object({
    subcategoryName: string().required('Enter subcategory name'),
  });
  const [AddSubcategory] = useAddSubcategoryMutation()
  const handleSubmit = (values: any) => {
    // console.log(values, "val")
    AddSubcategory(values).then((res) => {
      console.log(values, "bal")
      console.log(res,"res")
      if(res?.data) {
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








