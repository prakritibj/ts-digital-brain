
import { RouterProvider } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import store from './Slices/store'
import router from '../PageRoutes'
import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';




const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
      <ToastContainer/>
    </Provider>
  )
}

export default App
