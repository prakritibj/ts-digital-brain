
import { createBrowserRouter} from 'react-router-dom';
import LoginWrapper from "./src/Login/LoginWrapper"
import AddCategoryWrapper from './src/Category/Add/AddCategoryWrapper';
import CategoryListingWrapper from './src/Category/List/CategoryListingWrapper';
import EditCategoryWrapper from './src/Category/Edit/EditCategoryWrapper';
import Home from './src/Layout/Home';
import AddSubcategoryWrapper from './src/Subcategory/Add/AddSubcategoryWrapper';
// import EditSubcategoryWrapper from './src/Subcategory/Edit/EditCategoryWrapper';
// import SubcategoryListWrapper from './src/Subcategory/List/SubcategoryListingWrapper';



const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginWrapper />
    },
    {
        path: "/login",
        element: <LoginWrapper />
    },
    {
        path: "/addcategory",
        element: <AddCategoryWrapper/>
    },
     {
        path : "/getAllcategory",
        element: <CategoryListingWrapper/>
     },
     {
        path : "/edit-category/:id",
        element: <EditCategoryWrapper/>
     },

     {
        path : "/home",
        element: <Home/>
     },
     {
        path : "/addsubcategory",
         element : <AddSubcategoryWrapper/>
     }
    //  {
    //     path : "/edit-subcategory/:id",
    //      element : <EditSubcategoryWrapper/>
    //  },
    //  {
    //     path : "/subcategorylisting",
    //      element : <SubcategoryListWrapper/>
    //  }






]);



export default router
