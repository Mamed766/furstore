import ProductDetail from "./components/products/detail";

const { createBrowserRouter } = require("react-router-dom");
const { default: Layout } = require("./features/Layout/Layout");
const { default: Home } = require("./pages/home/home");

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);
