
import App from './App.jsx'
import './index.css'
import UserSignup from './components/user/userSignup.jsx';
import UserSignin from './components/user/userSignin.jsx';
// import HomeLayout from './layouts/HomeLayout.jsx';


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from './layouts/HomeLayout.jsx';

const router = createBrowserRouter([
  {
    element:<HomeLayout/>,
    children:[
      {
        path: "/usersignup",
        element: <UserSignup/>,
      },
      {
        path: "/usersignin",
        element: <UserSignin/>,
      },  
    ]
  },
  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);