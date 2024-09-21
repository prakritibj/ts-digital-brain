
import { createBrowserRouter} from 'react-router-dom';
import LoginWrapper from "./src/Login/LoginWrapper"
import AddCategoryWrapper from './src/Category/Add/AddCategoryWrapper';

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
   



]);



export default router
