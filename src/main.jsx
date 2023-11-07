import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './LayOut/Root.jsx';
import Home from './pages/Home/Home.jsx';
import LogIn from './pages/LogIn/LogIn.jsx';
import Register from './pages/Register/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import CreateAssignments from './pages/CreateAssignments/CreateAssignments.jsx';
import PrivateRoute from './Route/privateRoute.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/createassignments',
        element: <PrivateRoute><CreateAssignments></CreateAssignments></PrivateRoute>
      },
      {
        path:'/login',
        element: <LogIn></LogIn>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
