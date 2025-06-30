
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./components/home";
import Hero from "./components/hero";
import FadeInWhenVisible from "./components/fadeInWhenVisible";
import Testimonials, { TestimonialsV2 } from "./components/testimonials";


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
              <div className="mx-auto px-4 mt-10 w-full space-y-4 text-center md:mx-auto md:mt-[255px] md:w-[72%] lg:mt-[255px] lg:w-[72%]">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">
                  Stuck in the Maze? We&apos;ll guide you out.
                </h1>
              </div>
            </FadeInWhenVisible>
          </Layout>
        }
      />
      <Route
        path="/employee"
        element={
          <Layout>
            {" "}
            <FadeInWhenVisible>
              <Testimonials />{" "}
            </FadeInWhenVisible>
          </Layout>
        }
      />
      <Route
        path="/employer"
        element={
          <Layout>
            <FadeInWhenVisible>
              <TestimonialsV2 />
            </FadeInWhenVisible>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
