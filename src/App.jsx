import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Hero from "./components/hero";
import FadeInWhenVisible from "./components/fadeInWhenVisible";
import Testimonials, { TestimonialsV2 } from "./components/testimonials";
import EPFManagement from "./components/epfManagement";
import TrustIndicators from "./components/trustIndicators";
import HrChallenges from "./components/hrChallenges";
import ComplianceSolution from "./components/complaincesolution";
import ServiceCards from "./components/serviceCards";
import ESICCompliance from "./components/esicCompliance";
import ProfessionalTax from "./components/professionalTax";
import LabourWelfareFund from "./components/labourWelfareFund";
import StackedCards from "./components/scrollCards";
import CustomerCarousel from "./components/customerCarousel";
import LimitedCapacitySection from "./components/limitedCapacitySection";
import EPFDesk from "./components/epfDesk";
import VerticalCarousel from "./components/verticalCarousel";
import LatticeTabs from "./components/latticeTabs";
import { dummyCards, slidesLanding } from "../utils/data";
import LatticeSlider from "./components/latticeSlider";
import ScrollSyncComponent from "./components/scrollSyncComponent";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <FadeInWhenVisible>
              <Hero />
            </FadeInWhenVisible>
            {/* <FadeInWhenVisible>
              <TrustIndicators />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              {/* <HrChallenges /> */}
              <LatticeSlider slides={slidesLanding} />
            </FadeInWhenVisible>
            {/* <div>

            <VerticalCarousel />
            </div> */}
            {/* <FadeInWhenVisible>
              <ComplianceSolution />
            </FadeInWhenVisible> */}
            <FadeInWhenVisible>
              <ServiceCards />
            </FadeInWhenVisible>
            <StackedCards />
            <CustomerCarousel />
            <LimitedCapacitySection />
            {/* <LatticeTabs cards={dummyCards}/> */}
            {/* <ScrollSyncComponent /> */}
          </Layout>
        }
      />

       <Route
        path="/epfDesk"
        element={
          <Layout>
            <EPFDesk />
          </Layout>
        }
      />

      <Route
        path="/epf"
        element={
          <Layout>
            <EPFManagement />
          </Layout>
        }
      />
      <Route
        path="/esic"
        element={
          <Layout>
            <ESICCompliance />
          </Layout>
        }
      />
      <Route
        path="/pt"
        element={
          <Layout>
            <ProfessionalTax />
          </Layout>
        }
      />
      <Route
        path="/lwf"
        element={
          <Layout>
            <LabourWelfareFund />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
