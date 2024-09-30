
//   import React, { useState } from 'react';
//   import { Link } from 'react-router-dom';


// interface Category {
//   id: number;
//   _id: string; 
//   categoryName: string;
// }

// interface Props {
//   data: {
//     data: Category[];
//     deletedCategory: string;
//   };
//   deleteCategory: (id: string) => Promise<void>; 
//   editCategory: (id: string, newName: string) => Promise<void>;
// }

// const CategoryListing: React.FC<Props> = ({ data, deleteCategory, editCategory }) => {
//   const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
//   const [newCategoryName, setNewCategoryName] = useState<string>('');

//   const handleEditClick = (category: Category) => {
//     setEditingCategoryId(category._id);
//     setNewCategoryName(category.categoryName);
//   };

//   const handleSave = async (id: string) => {
//     await editCategory(id, newCategoryName);
//     setEditingCategoryId(null);
//     setNewCategoryName("");
//   };

//   return (
//     <div className="grid md:grid-cols-3 grid-flow-row p-4 gap-4">
//       {data?.data?.map((category) => (
//         <div className="flex-1 bg-white p-4 rounded shadow" key={category._id}>
//           {editingCategoryId === category._id ? (
//             <div>
//               <input
//                 type="text"
//                 value={newCategoryName}
//                 onChange={(e) => setNewCategoryName(e.target.value)}
//                 className="border p-2 rounded w-full"
//               />
//               <button onClick={() => handleSave(category._id)} className="border bg-green-400 text-white p-2 rounded">
//                 Save
//               </button>
//               <button onClick={() => setEditingCategoryId(null)} className="border bg-gray-400 text-white p-2 rounded">
//                 Cancel
//               </button>
//             </div>
//           ) : (
//             <div>
//               <h1 className="text-2xl font-serif m-2">{category.categoryName}</h1>
//               <button 
//                 onClick={() => deleteCategory(category._id)} 
//                 className="border bg-red-400 text-white p-2 rounded"
//               >
//                 Delete
//               </button>
// //               <Link to={`/edit-category/${category._id}?categoryName=${category.categoryName}`}><button
// //                className="border-2 p-2 rounded text white bg-sky-100">
// //                 Edit
// //               </button></Link>
// //             </div>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default CategoryListing;

// // ================================================================================================================================================

// import React from 'react';
// import { Link } from 'react-router-dom';

// interface Category {
//   id: number;
//   _id: string; 
//   categoryName: string;
// }

// interface Props {
//   data: {
//     data: Category[];
//     deletedCategory: string;
//   };
//   deleteCategory: (id: string) => Promise<void>; 
//   editCategory: (id: string, newName: string) => Promise<void>;

// }

// const CategoryListing: React.FC<Props> = ({ data, deleteCategory, editCategory }) => {

 
//   return (
//     <div className="grid md:grid-cols-3 grid-flow-row p-4 gap-4">
//       {data?.data.map((category) => (
//         <div className="flex-1 bg-white p-4 rounded shadow" key={category._id}>
//           <h1 className="text-2xl font-serif m-2">{category.categoryName}</h1>
//           <button 
//             onClick={() => deleteCategory(category._id)} 
//             className="border bg-red-400 text-white p-2 rounded"
//           >
//             Delete
//           </button>
//           <Link to={`/edit-category/${category._id}?categoryName=${category.categoryName}`}>
//             <button onClick={()=>editCategory()} className="border-2 p-2 rounded text-white bg-sky-100">
//               Edit
//             </button>
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategoryListing;


// ====-===========================--------------------------------------------------------------------------------------------------------------------

import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import AddSubcategoryWrapper from "../../Subcategory/Add/AddSubcategoryWrapper"
import SubcategoryListingWrapper from "../../Subcategory/List/SubcategoryListingWrapper";


interface Category {
  id: number;
  _id: string; 
  categoryName: string;
}


interface Props {
  data: {
    data: Category[];
    deletedCategory: string;
  };
  deleteCategory: (id: string) => Promise<void>; 
  editCategory: (id: string, newName: string) => Promise<void>;

}


const CategoryListing = ({data, deleteCategory,editCategory}: Props) => {

  return (
      <div className="grid lg:grid-cols-4 grid-cols-1 w-full gap-2 mt-8  ">
      {data?.data?.map((category) => {
        return (
          
          <div className="flex-1 bg-white p-4 rounded shadow-lg border border-pink-100 " key={category._id}>

            <h1 className="text-xl lg:text-2xl text-slate-600 font-serif my-4 flex justify-between items-center truncate">{category.categoryName}
            {/* <div>
              
            
             <button className="text-green-500"  onClick={()=>editCategory(category._id)}></button>
             

            <button onClick={()=> deleteCategory(category._id) }  className="text-red-400 ml-2"></button>
            </div> */}
            </h1>
            <hr />

            {/* <AddSubcategoryWrapper categoryId = {category._id}  /> */}
            
           <SubcategoryListingWrapper categoryId = {category._id} />
          </div>
         
        );
      })}
   </div>
  );
};


export default CategoryListing



  