import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./components/ProductDetails";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/allProducts",
    element: <AllProducts />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetails />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
