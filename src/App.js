import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetails />,
  },
]);

function App() {
  

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
