import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroObserver from "./heroObserver";

// import StackedCards from "./scrollCards";
// import StackedCardsSection from "./scrollCards";

export default function Layout({ children }) {
  return (
    <div className="overflow-hidden">
      <Navbar />
     <div className="my-10">
         {children}
     </div>
      {/* <StackedCardsSection /> */}
      <Footer />
      <HeroObserver />
    </div>
  );
}
