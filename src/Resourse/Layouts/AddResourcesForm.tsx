import React from 'react';
import ATMTextField from '../../components/Atoms/ATMTextField/ATMTextField';

type Props = {
  formikProps: any; 
};

const AddResourcesForm = ({ formikProps }: Props) => {
  const { values, handleChange, isSubmitting } = formikProps;
  console.log(values, "val")

  return (
    <div className="p-4">
      <div className="flex items-end gap-4">
        <div className="w-1/3">
          <ATMTextField
            className="p-2 w-full"
            label="Name"
            name="name"
            placeholder="Enter resource name"
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div className="w-1/3">
          <ATMTextField
            className="p-2 w-full"
            label="Add link"
            name="resourceLink"
            placeholder="Enter resource link"
           value={values.resourceLink}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-1 font-semibold">Description</label>
        <textarea
          className="p-2 border border-gray-300 rounded w-full outline outline-slate-200"
          name="description"
          placeholder="Enter resource description"
          value={values.description}
          onChange={handleChange}
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddResourcesForm;