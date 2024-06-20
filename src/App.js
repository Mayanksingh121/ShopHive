import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetails from "./components/ProductDetailsComponents/ProductDetails";
import CustomerDetails from "./components/CustomerDetailsComponent/CustomerDetails";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetails />,
  },
  {
    path: "/customerDetails",
    element: <CustomerDetails/>
  }
]);

function App() {
  

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
