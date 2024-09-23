
// interface Category {
//     id: number;
//     categoryName: string;
//   }

//   interface Props {
//     data: {
//       data: Category[];
//       deletedCategory: string;
//     };
//     deleteCategory: (id: string) => Promise<void>; 
//   }
  
//   const CategoryListing = ({data,deleteCategory}: Props) => {
  
//     return (
//       <>
//         {data?.data.map((category) => {
//           return (
//             <div className="grid md:grid-cols-3 grid-flow-row p-4"> 
//             <div className="flex-1 bg-white p-4 rounded shadow" key={category.id}>
//               <h1 className="text-2xl font-serif m-2">{category.categoryName}</h1>
//               <button onClick={()=> deleteCategory(category._id) }  className="border">Delete</button>
  
//               {/* <button onClick={()=>editCategory(category.categoryName)} className="border-2">Edit</button> */}
  
  
//             </div>
//           </div>
          
   
//           );
//         })}
//       </>
//     );
//   };
  
  
//   export default CategoryListing

  interface Category {
    id: number;
    _id: string; // Assuming you have an _id field for deletion
    categoryName: string;
  }
  
  interface Props {
    data: {
      data: Category[];
      deletedCategory: string; // Unclear usage; consider removing if not used
    };
    deleteCategory: (id: string) => Promise<void>; // Type for deleteCategory function
  }
  
  const CategoryListing: React.FC<Props> = ({ data, deleteCategory }) => {
    return (
      <div className="grid md:grid-cols-3 grid-flow-row p-4 gap-4">
        {data.data.map((category) => (
          <div className="flex-1 bg-white p-4 rounded shadow" key={category._id}>
            <h1 className="text-2xl font-serif m-2">{category.categoryName}</h1>
            <button 
              onClick={() => deleteCategory(category._id)} 
              className="border bg-red-300 text-white p-2 rounded"
            >
              Delete
            </button>
            {/* Uncomment for editing functionality */}
            {/* <button onClick={() => editCategory(category.categoryName)} className="border-2 p-2 rounded">Edit</button> */}
          </div>
        ))}
      </div>
    );
  };
  
  export default CategoryListing;
  