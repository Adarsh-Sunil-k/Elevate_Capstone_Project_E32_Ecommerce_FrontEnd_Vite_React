import App from './App.jsx'
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomeLayout from './layouts/HomeLayout.jsx';
import SignupPage from './pages/user/SignupPage.jsx';
import LoginPage from './pages/user/LoginPage.jsx';

const router = createBrowserRouter([
  {
    element:<HomeLayout/>,
    children:[
      {
        path: "/usersignup",
        element: <SignupPage/>,
      },
      {
        path: "/usersignin",
        element: <LoginPage/>,
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