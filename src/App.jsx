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
import { dummyCards, largeCardsLanding, slidesLanding } from "../utils/data";
import LatticeSlider from "./components/latticeSlider";
import ScrollSyncComponent from "./components/scrollSyncComponent";
import LargeCardSlider from "./components/largeCards";
import MazeEscapeSection from "./components/mazeEscapeSection";
import AboutUs from "./components/aboutUs";
import Login from "./components/login";
import SignUp from "./components/signIn";
import { Toaster } from "react-hot-toast";
import Posh from "./components/posh";
import LabourAndHR from "./components/labourAndHR";
import RedirectHandler from "./components/redirectHandler";
import { AuthProvider } from './context/authProvider';

function App() {
  return (
    <>
    <AuthProvider>
      <Toaster position="top-center" />
       <RedirectHandler />
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
                {/* <LatticeSlider slides={slidesLanding} /> */}
                <LargeCardSlider cardsData={largeCardsLanding} />
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
              <FadeInWhenVisible>
                <StackedCards />
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <CustomerCarousel />
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                <LimitedCapacitySection />
              </FadeInWhenVisible>
              {/* <LatticeTabs cards={dummyCards}/> */}
              {/* <ScrollSyncComponent /> */}
              <FadeInWhenVisible>
                <MazeEscapeSection />
              </FadeInWhenVisible>
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
          path="/posh"
          element={
            <Layout>
              <Posh />
            </Layout>
          }
        />
        <Route
          path="/labour"
          element={
            <Layout>
              <LabourAndHR />
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
        <Route
          path="/about"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/signin"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
      </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
