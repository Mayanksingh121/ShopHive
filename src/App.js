import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import CartModal from "./components/CartModal";
import { useState } from "react";

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
  const [isCartVisible, setIsCartVisible] =  useState(false);

  const handleShowCart = ()=>{
    setIsCartVisible(!isCartVisible);
  }

  return (
    <>
      {isCartVisible && <CartModal handleCart={handleShowCart}/>}
      <Header handleCart = {handleShowCart}/>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
