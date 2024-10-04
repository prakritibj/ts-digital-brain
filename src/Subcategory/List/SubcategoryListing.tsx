import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

interface Subcategory {
  _id: string;
  subcategoryName: string;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}

interface Category {
  categoryId: string;
  categoryName: string;
  subCategories: Subcategory[];
}

interface Props {
  data: { data: Category[] }; // Adjust the data structure to match the provided JSON structure
  categoryId: string;
  deletesubcategory: (id: string) => void; // Add type for deletesubcategory
  handleEdit: (id: string) => void; 
}

const SubcategoryList = ({ data, categoryId, deletesubcategory, handleEdit }: Props) => {
  // Find the category based on the passed categoryId
  const category = data?.data?.find((cat) => cat.categoryId === categoryId);

  return (
    <div>
      {/* Check if the category exists before mapping */}
      {category ? (
        category?.subCategories?.map((subcategory) => (
          <div key={subcategory._id} className="flex justify-between items-center p-2 border-b">
            <span>{subcategory.subcategoryName}</span>
            <div>
              <button className="text-blue-500 size" onClick={()=>{handleEdit(subcategory._id)}}>
                <CiEdit />
              </button>

          <button onClick={()=>{deletesubcategory(subcategory._id)}} className="text-red-400 ml-2">
            <MdDeleteForever />
          </button>
        </div>
      </div>
    ))
  ) : (
    <p>No subcategories found for this category.</p>
  )}
  
</div>
  );
};

export default SubcategoryList;

