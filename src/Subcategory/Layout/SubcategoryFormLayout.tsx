
import { ErrorMessage, FormikProps } from "formik"
import ATMTextField from "../../components/Atoms/ATMTextField/ATMTextField"

type Props = { formikProp: FormikProps<any> }
const Subcategory = ({ formikProp }: Props) => {
  const { values, handleChange } = formikProp


  return (
    <div className="h-screen flex justify-center flex-col items-center gap-3 m-auto">

      {/* subcategory input field */}
      <div className="border-2 bg-gray-100 rounded-lg shadow-lg w-[20%] h-auto p-6">
        <h2 className="text-lg font-semibold mb-4 text-slate-500 text-center">Add subcategory</h2>

        <ATMTextField
          className="border border-gray-300 rounded-lg w-full p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="subcategoryName"
          placeholder="Enter subcategory"
          label="subcategory Name"
          value={values.subcategoryName}
          onChange={handleChange}
        />
        <p className="text-red-500 text-sm mb-2"><ErrorMessage name="subcategoryName" /></p>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg mt-2 px-4 py-2  hover:bg-blue-600 transition duration-200"
        >
          Add
        </button>
      </div>

    </div>


  )
}

export default Subcategory
