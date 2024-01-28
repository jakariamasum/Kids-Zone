import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../LayOut/Home";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import AddToy from "../Pages/AddToy/AddToy";
import MyToys from "../Pages/MyToys/MyToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import Update from "../Pages/Update/Update";
import Cart from "../components/Cart/Cart";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <NotFoundPage/>,
      children:[
        {
            path:'/', 
            element: <Home/>
        },
        {
            path:'/toys', 
            element: <AllToys/>
        },
        {
          path:'/cart',
          element: <Cart/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
          path:'/login',
          element: <Login/>
        },
        {
          path: '/register', 
          element: <Register/>
        },
        {
          path: '/add-toys', 
          element: <PrivateRoute><AddToy/></PrivateRoute>
        },
        {
          path: '/my-toys',
          element: <PrivateRoute><MyToys/></PrivateRoute>
        },
        {
          path: '/toy-details/:id',
          element:<PrivateRoute><ToyDetails/></PrivateRoute>,
          loader: ({params})=>fetch(`https://kids-zone-server-weld.vercel.app/toy-details/${params.id}`)
        },
        {
          path: 'update/:id', 
          element: <Update/>,
          loader: ({params})=>fetch(`https://kids-zone-server-weld.vercel.app/my-toy/${params.id}`)
        }
      ]
    },
  ]);

  export default router;
