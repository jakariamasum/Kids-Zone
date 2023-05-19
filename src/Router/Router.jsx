import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../LayOut/Home";
import AllToys from "../Pages/AllToys/AllToys";
import Login from "../Pages/Login/Login";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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
            path: '/blog',
            element: <Blog/>
        },
        {
          path:'/login',
          element: <Login/>
        }
      ]
    },
  ]);

  export default router;