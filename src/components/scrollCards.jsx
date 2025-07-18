import React from "react";
import LatticeSlider from "./latticeSlider";
import { pastelCardsLanding, slidesStacking } from "../../utils/data";
import PastelCardSlider from "./pastelCardSlider";

const StackedCards = () => {
  return (
    <>
      <section className="text-center mb-12 w-full md:w-[75%] lg:w-[75%] mx-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center  text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-4xl font-bold tracking-tight leading-tight text-gray-900">
            The EPFDesk.com Advantage: Authority, Expertise, Trust
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-xl mt-6 text-gray-600">
            When you partner with EPFDesk.com, you gain more than a service
            provider; you gain a strategic ally. Our advantage is defined by the
            unparalleled knowledge of our teams, our expansive reach, and a
            client-first approach designed for your ultimate peace of mind.
          </p>
          <p className="text-lg md:text-xl mt-6 text-gray-600">
            Unmatched Compliance Expertise & Strategic Insights.
          </p>
        </div>
      </section>
      {/* <section className="wrapper w-full md:w-[80%] lg:w-[80%]">
        <div className="slp-container">
          <ul className="cards-container">
            <li className="card card-1 gitlab-duo" style={{background:'#fffae6'}}>
              <div className="left-side gitlab-duo">
                <div className="pill">Expertise</div>
                <h4 className="text-xl font-semibold mt-4 text-gray-800">
                  Hands-on Government Expertise
                </h4>
                <p className="slp-text-body1 mt-2 text-gray-600">
                  Our team combines deep portal expertise with on-ground EPFO
                  office experience, legal knowledge, and proven audit handling
                  capabilities. From complex registrations and deregistrations
                  to navigating ever-changing compliance procedures, our experts
                  have mastered every aspect of statutory compliance.
                </p>
              </div>
              <div className=" gitlab-duo">
                <img
                  src="https://about.gitlab.com/images/homepage/card-flip-duo-chat.svg"
                  alt="dummy"
                  srcset=""
                />
              </div>
            </li>

            <li className="card card-2 platform" style={{background:'#f8f0ff'}}>
              <div className="left-side platform">
                <div className="pill">Presence</div>

                <h4 className="text-xl font-semibold mt-4 text-gray-800">
                  Nationwide Operational Footprint
                </h4>
                <p className="slp-text-body1 mt-2 text-gray-600">
                  Our offices across major metros and presence in almost all
                  states ensure seamless statutory compliance support wherever
                  your business operates. Your employees can access social
                  security benefits without geographical barriers.
                </p>
              </div>
              <div className=" gitlab-duo">
                <img
                  src="https://about.gitlab.com/images/homepage/card-flip-code-review.svg"
                  alt="dummy"
                  srcset=""
                />
              </div>
            </li>

            <li className="card card-3 security">
              <div className="left-side security">
                <div className="pill">Regulatory</div>

                <h4 className="text-xl font-semibold mt-4 text-gray-800">
                  Proactive Regulatory Guidance
                </h4>
                <p className="slp-text-body1 mt-2 text-gray-600">
                  We monitor every update in EPFO, ESIC, PT, and LWF laws. Our
                  team ensures your company is compliant before new mandates
                  take effect—no surprises, no gaps.
                </p>
              </div>
              <div className=" gitlab-duo">
                <img
                  src="https://about.gitlab.com/images/homepage/card-flip-security.svg"
                  alt="dummy"
                  srcset=""
                />
              </div>
            </li>

            <li className="card card-4 devsecops" style={{background:'#eafce9'}}>
              <div className="left-side devsecops">
                <div className="pill">Support</div>

                <h4 className="text-xl  font-semibold mt-4 text-gray-800">
                  Dedicated Client Managers
                </h4>
                <p className="slp-text-body1 mt-2 text-gray-600">
                  Your assigned manager becomes an extension of your team,
                  managing all compliance obligations proactively so you can
                  focus on growth. No missed deadlines, no stress—just total
                  confidence.
                </p>
              </div>
              <div className=" gitlab-duo">
                <img
                  src="https://about.gitlab.com/images/homepage/card-flip-devsecops.svg"
                  alt="dummy"
                  srcset=""
                />
              </div>
            </li>

            <div className="buffer" data-v-c1476a23=""></div>
          </ul>
        </div>
      </section> */}
      {/* <LatticeSlider slides={slidesStacking} /> */}
      <PastelCardSlider cardsData={pastelCardsLanding}/>
    </>
  );
};

export default StackedCards;
