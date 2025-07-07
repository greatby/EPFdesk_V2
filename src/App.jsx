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
            <FadeInWhenVisible>
              <TrustIndicators />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <HrChallenges />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <ComplianceSolution />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <ServiceCards />
            </FadeInWhenVisible>
            <StackedCards />
            {/* <CustomerCarousel /> */}
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
