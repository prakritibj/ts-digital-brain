
import { createBrowserRouter} from 'react-router-dom';
import LoginWrapper from "./src/Login/LoginWrapper"
import AddCategoryWrapper from './src/Category/Add/AddCategoryWrapper';
import CategoryListingWrapper from './src/Category/List/CategoryListingWrapper';
import EditCategoryWrapper from './src/Category/Edit/EditCategoryWrapper';
import AddSubcategoryWrapper from './src/Subcategory/Add/AddSubcategoryWrapper';
import SubcategoryListWrapper from './src/Subcategory/List/SubcategoryListingWrapper';
import RegistrationWrapper from './src/RegisterPage/RegisterPageWrapper';
import EditSubcategoryWrapper from './src/Subcategory/Edit/EditSubcategory';
import ResourcesListingWrapper from './src/Resourse/List/ResourseListingWrapper';
import AddResourcesWrapper from './src/Resourse/Add/AddResourseWrapper';
import ResourcesLayout from './src/Layout/ResourseLayout/ResourseLayout';
import HomeLayout from './src/Layout/HomeLayout/Home';
import EditResourcesWrapper from './src/Resourse/Edit/EditResourseWrapper';


const router = createBrowserRouter([
   {
      path: "/",
      element: <LoginWrapper/>
    },
   {
      path: "/login",
      element: <LoginWrapper/>
    },
      {
         path : "/registration",
          element :  <RegistrationWrapper/>
      },

      // category  page routes
      {
         path : "/home",
         element: <HomeLayout/>
      },
    {
        path: "/addcategory",
        element: <AddCategoryWrapper/>
    },
    {
       path : "/edit-category/:id",
       element: <EditCategoryWrapper/>
    },
     {
        path : "/getAllcategory",
        element: <CategoryListingWrapper/>
     },

  // Sub Category Page routes

     {
        path : "/addsubcategory",
         element : <AddSubcategoryWrapper/>
     },
     {
        path : "/edit-subcategory/:id",
         element : <EditSubcategoryWrapper/>
     },
     {
        path : "/subcategory-list",
         element : <SubcategoryListWrapper/>
     },



     // Resources Page routes
     {
        path : "/Resourse-form",
        element : <AddResourcesWrapper/>
     },
     {
      path: "/resourceslist",
      element: <ResourcesListingWrapper/>
    },
    
    {
      path:"/resources/:subcategoryId",
      element: <ResourcesLayout/>
    },
    {
      path:"/edit-resource/:id",
      element: <EditResourcesWrapper/>
    },
    
   

]);



export default router
