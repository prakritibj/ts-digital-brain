
// interface Category {
//     id: number;
//     categoryName: string;
//   }
  
//   interface Props {
//     data: {
//       data: Category[];
//     };
//   }
  
  
//   const CategoryListing = ({data, deleteCategory}: Props) => {
  
//     return (
//       <>
//         {data?.data.map((category) => {
//           return (
//             <div className="grid md:grid-cols-3 grid-flow-row p-4"> 
//             <div className="flex-1 bg-white p-4 rounded shadow" key={category.id}>
//               <h1 className="text-2xl font-serif m-2">{category.categoryName}</h1>
//               <button onClick={()=> deleteCategory(category._id) }  className="border">Delete</button>
  
//               <button onClick={()=>editCategory(category.categoryName)} className="border-2">Edit</button>
  
  
//             </div>
//           </div>
          
   
//           );
//         })}
//       </>
//     );
//   };
  
  
//   export default CategoryListing