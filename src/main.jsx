import App from './App.jsx'
import './index.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import HomeLayout from './layouts/HomeLayout.jsx';
import SignupPage from './pages/user/SignupPage.jsx';
import LoginPage from './pages/user/LoginPage.jsx';
// import ProductDetailPage from './pages/ProductDetailPage.jsx';
import ProductDetail from "./components/productDetail.jsx"

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
      {
        path: "/products/${productId}", // Add this route for ProductDetailPage
        element: <ProductDetail.jsx />,
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
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);