import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/MainRoute.jsx';
import AuthProvider from './authProvider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-[1440px] mx-auto'>
        <RouterProvider router={router} />
        <ToastContainer />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
