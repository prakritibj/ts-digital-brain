
import { createBrowserRouter} from 'react-router-dom';
import LoginWrapper from "./src/Login/LoginWrapper"
import AddCategoryWrapper from './src/Category/Add/AddCategoryWrapper';
import CategoryListingWrapper from './src/Category/List/CategoryListingWrapper';

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
        path : "getAllcategory",
        element: <CategoryListingWrapper/>
     }


]);



export default router
