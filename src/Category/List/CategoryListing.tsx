
import { Link } from "react-router-dom";
import {AiFillDelete} from "react-icons/ai";
import { BiSolidCommentEdit } from "react-icons/bi";
import AddSubcategoryWrapper from "../../Subcategory/Add/AddSubcategoryWrapper"
import SubcategoryListWrapper from "../../Subcategory/List/SubcategoryListingWrapper";


interface Category {
  _id: string;
  categoryName: string;
}

interface Props {
  data: {
    data: Category[];
  };
  deleteCategory: (id: string) => void; 
  handleEdit: (id: string) => void; 
}


const CategoryListing = ({data, deleteCategory,handleEdit}: Props) => {

  console.log(data, "dd")
  return (
      <div className="grid lg:grid-cols-4 grid-cols-1 w-full gap-2 mt-8  ">
      {data?.data.map((category) => {
        return (
          
          <div className="flex-1 bg-white p-4 rounded shadow-lg border border-pink-100 " key={category._id}>

            <h1 className="text-xl lg:text-2xl text-slate-600 font-serif my-4 flex justify-between items-center truncate">{category.categoryName}
            <div>
              
            
             <button className="text-green-500"  onClick={()=>handleEdit(category._id)}><BiSolidCommentEdit /></button>
             

            <button onClick={()=> deleteCategory(category._id) }  className="text-red-400 ml-2"><AiFillDelete /></button>

            </div>
            </h1>
            <hr />

            <AddSubcategoryWrapper categoryId = {category._id}  />
            
           <SubcategoryListWrapper categoryId = {category._id} />
          </div>
         
        );
      })}
   </div>
  );
};


export default CategoryListing

