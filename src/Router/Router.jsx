import {
    createBrowserRouter,
  } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
    },
  ]);

  export default router;