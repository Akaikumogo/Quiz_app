import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

import Layout from "../Layout/PageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  //   {
  //     path: "/sign-in",
  //     element: <SignIn />,
  //   },
]);

export default router;
