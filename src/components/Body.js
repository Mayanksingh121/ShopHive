import MainContainer from "./MainContainer";
import AboutUs from "./AboutUs";
import Trending from "./Trending";
import Footer from "./Footer";
import CustomerReviews from "./CustomerReviews";
import { useSelector } from "react-redux";
import AllProducts from "./AllProducts";
import { useState } from "react";
import CartModal from "./CartModal";
import Header from "./Header";

const Body = () => {
  const onProduct = useSelector((store) => store.product.onProductsPage);

  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleShowCart = () => {
    setIsCartVisible(!isCartVisible);
  };
  return (
    <div>
      {isCartVisible && <CartModal handleCart={handleShowCart} />}
      {onProduct ? (
        <>
          <Header handleCart={handleShowCart} />
          <AllProducts />
        </>
      ) : (
        <>
          <Header handleCart={handleShowCart} />
          <MainContainer />
          <AboutUs />
          <Trending />
          <CustomerReviews />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Body;
