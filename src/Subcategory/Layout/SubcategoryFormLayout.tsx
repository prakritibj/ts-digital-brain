import { ErrorMessage } from "formik";
import ATMTextField from "../../components/Atoms/ATMTextField/ATMTextField";

import { IoIosAddCircle } from "react-icons/io";

const AddSubcategoryForm = ({ formikProp}: Props) => {
  const { values, handleChange, isSubmitting } = formikProp;

  return (
    <>
      <div className="flex justify-start gap-3 mt-4 ml-4 m-auto">

        {/* Subcategory input field */}
        <ATMTextField
        label=""
        className="border-pink-300 p-0 w-full placeholder:text-sm"
        name="subcategoryName"
        placeholder="Enter subcategory name"
        value={values.subcategoryName} 
        onChange={handleChange}
        />
        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitting} // disable when submitting
          className={`flex items-center gap-1 text-gray-700 hover:text-gray-900 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <IoIosAddCircle className="text-slate-600" />
        </button>
      </div>

      <p>
        <ErrorMessage name="subcategoryName" />
      </p>
    </>
  );
};

export default AddSubcategoryForm;

