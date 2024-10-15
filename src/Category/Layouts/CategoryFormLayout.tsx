
import { ErrorMessage, FormikProps } from "formik"
import ATMTextField from "../../components/Atoms/ATMTextField/ATMTextField"

type Props = { formikProp: FormikProps<any> }
const CategoryFormLayout = ({ formikProp ,buttonName,heading}: Props) => {
  const { values, handleChange, isSubmitting } = formikProp
  return (
    <div className="h-screen flex justify-center flex-col items-center gap-3 m-auto">

      {/* category input field */}
      <div className="border-2 bg-gray-100 rounded-lg shadow-lg w-[20%] h-auto p-6">
        <h2 className="text-lg font-semibold mb-4 text-slate-500 text-center">{heading}</h2>

        <ATMTextField
          className="border border-gray-300 rounded-lg w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="categoryName"
          placeholder="Enter Category"
          label="Category Name"
          value={values.categoryName}
          onChange={handleChange}
        />
        <p className="text-red-500 text-sm mb-2"><ErrorMessage name="categoryName" /></p>

        <button
          type="submit"
          disabled = {isSubmitting}
          className="bg-blue-500 text-white rounded-lg mt-2 px-4 py-2  hover:bg-blue-600 transition duration-200"
        >
            {isSubmitting ? "Submiting" : buttonName}
        </button>
      </div>

    </div>


  )
}

export default CategoryFormLayout