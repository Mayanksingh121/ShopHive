import MainContainer from "./MainContainer";
import AboutUs from "./AboutUs";
import Trending from "./Trending";
import Footer from "./Footer";
import CustomerReviews from "./CustomerReviews";
import { useSelector } from "react-redux";
import AllProducts from "./AllProducts";

const Body = () => {
  const onProduct = useSelector((store) => store.product.onProductsPage);
  return (
    <div>
      {onProduct ? (
        <>
          <AllProducts />
        </>
      ) : (
        <>
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
