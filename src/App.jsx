
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
            <TrustIndicators/>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <HrChallenges/>
            </FadeInWhenVisible>
             <FadeInWhenVisible>
            <ComplianceSolution/>
            </FadeInWhenVisible>
             <FadeInWhenVisible>
            <ServiceCards/>
            </FadeInWhenVisible>
       
          </Layout>
        }
      />
     
     <Route path="/epf" element={<Layout><EPFManagement /></Layout>}/>
    </Routes>
  );
}

export default App;
