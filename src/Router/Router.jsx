import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../LayOut/Home";
import AllToys from "../Pages/AllToys/AllToys";
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
        }
      ]
    },
  ]);

  export default router;