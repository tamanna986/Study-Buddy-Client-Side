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
import AllAssignments from './pages/AllAssignments/AllAssignments.jsx';
import AssignmentDetails from './pages/AssignmentDetails/AssignmentDetails.jsx';
import UpdateAssignments from './pages/UpdateAssignments/UpdateAssignments.jsx';
import AllSubmittedAssignments from './pages/AllSubmittedAssignments/AllSubmittedAssignments.jsx';



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
      },
      {
        path:'/allAssignments',
        element: <AllAssignments></AllAssignments>
      },
      {
        path:'/allAssignments/:id',
        element: <PrivateRoute><AssignmentDetails></AssignmentDetails></PrivateRoute>
      },
      {
        path:'/update/:id',
        element: <PrivateRoute><UpdateAssignments></UpdateAssignments></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
      },
      {
        path:'/allSubmittedAssignments',
        element: <PrivateRoute><AllSubmittedAssignments></AllSubmittedAssignments></PrivateRoute>
        
        
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
