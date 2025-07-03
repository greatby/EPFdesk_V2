import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroObserver from "./heroObserver";

// import StackedCards from "./scrollCards";
import StackedCardsSection from "./scrollCards";
import TrustIndicators from "./trustIndicators";
import HrChallenges from "./hrChallenges";
import ComplianceSolution from "./complaincesolution";
import ServiceCards from "./serviceCards";
import FadeInWhenVisible from "./fadeInWhenVisible";

export default function Layout({ children }) {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="">{children}</div>
      {/* <StackedCardsSection /> */}
      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
      <HeroObserver />
    </div>
  );
}
