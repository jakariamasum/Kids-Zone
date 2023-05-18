import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Blog from "../Pages/Blog/Blog";
import Home from "../LayOut/Home";
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
            path: '/blog',
            element: <Blog/>
        }
      ]
    },
  ]);

  export default router;