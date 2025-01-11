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
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute"; 
import AddItems from "../Pages/Dashboard/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome";

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
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // users route
        {
          path:'/dashboard/cart',
          element:<Cart></Cart>
        },
        {
          path:'/dashboard/payment',
          element:<Payment></Payment>
        },
        {
          path:'/dashboard/paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        {
          path:'/dashboard/userHome',
          element:<UserHome></UserHome>
        },
        // admin only routes
        {
          path:'/dashboard/adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'/dashboard/users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
          path:'/dashboard/addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
          // element:<AddItems></AddItems>
        },
        {
          path:'/dashboard/addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
          // element:<AddItems></AddItems>
        },
        {
          path:'/dashboard/manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
          // element:<AddItems></AddItems>
        },
        {
          path:'/dashboard/updateItem/:id',
          loader:({params})=>fetch(`https://bistro-boss-server-mu-pink.vercel.app/menu/${params.id}`),
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>
        },
      ]
    },
  ]);