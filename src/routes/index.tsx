import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/_layout";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: <></>,
    children: [],
  },
]);
