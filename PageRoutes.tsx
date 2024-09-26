
import { createBrowserRouter} from 'react-router-dom';
import LoginWrapper from "./src/Login/LoginWrapper"
import AddCategoryWrapper from './src/Category/Add/AddCategoryWrapper';
import CategoryListingWrapper from './src/Category/List/CategoryListingWrapper';
import EditCategoryWrapper from './src/Category/Edit/EditCategoryWrapper';
import Home from './src/Layout/Home';
// import Home from './src/Layout';


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
     }



]);



export default router
