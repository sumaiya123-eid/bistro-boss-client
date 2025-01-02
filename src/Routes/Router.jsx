import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/MenuPage";
import MenuPage from "../Pages/Menu/MenuPage";
import Shop from "../Pages/Shop/Shop";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/menu',
          element:<MenuPage></MenuPage>,
        },
        {
          path:'/shop/:category',
          element:<Shop></Shop>,
        },
        {
          path:'/contact',
          element:<Contact></Contact>,
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/register',
          element:<Register></Register>,
        },
      ],
    },
  ]);