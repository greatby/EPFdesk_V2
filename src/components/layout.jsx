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
import { useLocation } from 'react-router-dom'

export default function Layout({ children }) {
   const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <div className={isHome ? 'font-roboto' : 'font-sans'}>
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
