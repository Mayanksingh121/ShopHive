import MainContainer from "./MainContainer";
import AboutUs from "./AboutUs";
import Trending from "./Trending";
import Footer from "./Footer";
import CustomerReviews from "./CustomerReviews";

const Body = () => {
  return (
    <div>
      <MainContainer />
      <AboutUs />
      <Trending />
      <CustomerReviews/>
      <Footer/>
    </div>
  );
};

export default Body;
