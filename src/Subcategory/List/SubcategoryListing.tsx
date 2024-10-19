import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleDelete = async (subcategoryId: string) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this subcategory?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        deletesubcategory(subcategoryId);
        Swal.fire('Deleted!', 'The subcategory has been deleted.', 'success');
      } catch (error) {
        Swal.fire('Error!', 'There was a problem deleting the subcategory.', 'error');
      }
    }
  };

  return (
    <div>
      {/* Check if the category exists before mapping */}
      {category ? (
        category?.subCategories?.map((subcategory) => (
          <div key={subcategory._id} className="flex justify-between items-center p-3 border-b">
            {/* <span>{subcategory.subcategoryName}</span> */}
            <span> <Link to={`/resources/${subcategory._id}`}> {subcategory.subcategoryName} </Link>  </span>

            <div>
              <button className="text-blue-900 size" onClick={() => { handleEdit(subcategory._id) }}>
                <CiEdit />
              </button>

              <button onClick={() => { handleDelete(subcategory._id) }} className="text-red-400 ml-2">
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

