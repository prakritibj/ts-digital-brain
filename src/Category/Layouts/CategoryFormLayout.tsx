

import { ErrorMessage, FormikProps } from "formik"
import ATMTextField from "../../components/Atoms/ATMTextField/ATMTextField"

type Props = {formikProp: FormikProps<any>}
const Category = ({formikProp}: Props) => {
const {values, handleChange} = formikProp



  return (
  <div className="h-screen flex justify-center flex-col items-center gap-3 m-auto">

    {/* category input field */}

    <div className="border-2 bg-gray-300 rounded-lg shadow-lg w-30 h-50 px-5 py-8 ">     
       <ATMTextField 
        className="p-3 mt-3"
        name="categoryName"
        placeholder="Enter Category"
        label="Add Category"
        value= {values.categoryName}
        onChange={handleChange}
       />
       <p className="text-red-500 text-sm"><ErrorMessage name= "categoryName"/></p>

      <button type="submit" className="border-2 rounded mt-2 w-full p-1">Add</button>
       
    </div>
  </div>


  )
}

export default Category