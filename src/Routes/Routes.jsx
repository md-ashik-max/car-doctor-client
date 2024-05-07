import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/Home/Services/ServiceDetails";
import Checkout from "../pages/Checkout/Checkout";
import PrivetRoutes from "../Route/PrivetRoutes";
import Order from "../pages/Order/Order";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/details/:id',
            element:<PrivetRoutes><ServiceDetails></ServiceDetails></PrivetRoutes>,
            loader:({params})=>fetch(`https://car-doctor-server-tau-jet.vercel.app/services/${params.id}`)
        },
        {
            path:'/checkout/:id',
            element:<PrivetRoutes><Checkout></Checkout></PrivetRoutes>,
            loader:({params})=>fetch(`https://car-doctor-server-tau-jet.vercel.app/services/${params.id}`)
        },
        {
            path:'/order',
            element:<PrivetRoutes><Order></Order></PrivetRoutes>,
        },
      ]
    },
  ]);

  export default router;