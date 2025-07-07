import React from "react";

const StackedCards = () => {
  return (
    <>
      <section className="w-full bg-white pt-8 md:pt-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900">
            Ship secure software, faster.
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl mt-6 text-gray-600 max-w-2xl">
            Join the 50+ million people already using GitLab.
          </p>

          {/* Email form */}
          <form
            method="get"
            action="https://gitlab.com/-/trial_registrations/new/"
            className="mt-8 w-full max-w-xl flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
              Get started
            </button>

            {/* Hidden fields */}
            <input
              type="hidden"
              name="glm_content"
              value="default-sass-trial"
            />
            <input type="hidden" name="glm_source" value="about.gitlab.com" />
          </form>

          {/* Secondary CTA */}
          <a
            href="/sales/"
            className="mt-4 inline-flex items-center text-indigo-600 hover:underline text-sm font-medium"
          >
            Contact sales
            <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.22 2.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l4.72-4.72-4.72-4.72a.75.75 0 0 1 0-1.06z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </section>
      <section className="wrapper w-full md:w-[80%] lg:w-[80%]">
        <div className="slp-container">
          <ul className="cards-container">
            <li className="card card-1 gitlab-duo">
              <div className="left-side gitlab-duo">
                <div className="pill">Gitlab duo</div>
                <h3 className="slp-text-heading3-bold card-title">
                  GitLab Premium & Ultimate, with native AI
                </h3>
                <ul data-v-c1476a23="">
                  <li className="feature" data-v-c1476a23="">
                    <div className="feature-title" data-v-c1476a23="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        data-v-c1476a23=""
                      >
                        <path
                          d="M6.9392 0.50059L6.28985 4.29122C6.07733 5.52538 5.16824 6.48249 4.02302 6.70917L0.469304 7.40181C-0.156434 7.52774 -0.156434 8.48485 0.469304 8.59819L4.02302 9.29083C5.18005 9.51751 6.07733 10.4872 6.28985 11.7088L6.9392 15.4994C7.05726 16.1669 7.95454 16.1669 8.0608 15.4994L8.71015 11.7088C8.92267 10.4746 9.83176 9.51751 10.977 9.29083L14.5307 8.59819C15.1564 8.47226 15.1564 7.51515 14.5307 7.40181L10.977 6.70917C9.81995 6.48249 8.92267 5.51279 8.71015 4.29122L8.0608 0.50059C7.94274 -0.166863 7.04545 -0.166863 6.9392 0.50059Z"
                          fill="#7759C2"
                        ></path>
                      </svg>
                      <div
                        className="feature-title__content"
                        data-v-c1476a23=""
                      >
                        <p
                          className="slp-text-body1 feature-title__title"
                          data-v-64ad2128=""
                          data-v-c1476a23=""
                        >
                          AI Chat in the IDE{" "}
                          <span className="new-pill" data-v-c1476a23="">
                            New
                          </span>
                        </p>
                      </div>
                    </div>
                    <p
                      className="slp-text-body2 feature-description"
                      data-v-64ad2128=""
                      data-v-c1476a23=""
                    >
                      Accelerate development with contextual, conversational AI.
                    </p>
                  </li>
                  <li className="feature" data-v-c1476a23="">
                    <div className="feature-title" data-v-c1476a23="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        data-v-c1476a23=""
                      >
                        <path
                          d="M6.9392 0.50059L6.28985 4.29122C6.07733 5.52538 5.16824 6.48249 4.02302 6.70917L0.469304 7.40181C-0.156434 7.52774 -0.156434 8.48485 0.469304 8.59819L4.02302 9.29083C5.18005 9.51751 6.07733 10.4872 6.28985 11.7088L6.9392 15.4994C7.05726 16.1669 7.95454 16.1669 8.0608 15.4994L8.71015 11.7088C8.92267 10.4746 9.83176 9.51751 10.977 9.29083L14.5307 8.59819C15.1564 8.47226 15.1564 7.51515 14.5307 7.40181L10.977 6.70917C9.81995 6.48249 8.92267 5.51279 8.71015 4.29122L8.0608 0.50059C7.94274 -0.166863 7.04545 -0.166863 6.9392 0.50059Z"
                          fill="#7759C2"
                        ></path>
                      </svg>
                      <div
                        className="feature-title__content"
                        data-v-c1476a23=""
                      >
                        <p
                          className="slp-text-body1 feature-title__title"
                          data-v-64ad2128=""
                          data-v-c1476a23=""
                        >
                          AI Code Suggestions in the IDE{" "}
                          <span className="new-pill" data-v-c1476a23="">
                            New
                          </span>
                        </p>
                      </div>
                    </div>
                    <p
                      className="slp-text-body2 feature-description"
                      data-v-64ad2128=""
                      data-v-c1476a23=""
                    >
                      Helps developers write secure code more efficiently.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="right-side hidden md:block">
                <img
                  src="https://about.gitlab.com/images/homepage/card-flip-duo-chat.svg"
                  alt="dummy"
                  loading="lazy"
                />
              </div>
            </li>
            <li className="card card-2 platform">
              <div className="left-side platform">
                <div className="pill">Platform</div>
                <h3 className="slp-text-heading3-bold card-title">
                  Less time managing tools. More time delivering features.
                </h3>
                <p
                  className="slp-text-body1 slp-mt-16"
                  data-v-64ad2128=""
                  data-v-c1476a23=""
                >
                  Streamline your software delivery process with an intelligent
                  DevSecOps platform.
                </p>
                <a
                  data-ga-name="platform"
                  data-ga-location="cards"
                  className="slp-mt-24 slp-btn slp-btn-tertiary slp-mt-24"
                  href="/platform/"
                  data-v-c6fd7cb9=""
                  data-v-c1476a23=""
                >
                  Explore our Platform{" "}
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="slp-icon slp-icon slp-icon--size-sm slp-icon--color-color-text-300"
                    role="img"
                    aria-hidden="true"
                    data-icon-name=""
                    data-v-b82aeda9=""
                    data-v-c1476a23=""
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.22 2.22a.75.75 0 0 1 1.06 0l5.252 5.252a.75.75 0 0 1 0 1.06L6.28 13.784a.75.75 0 1 1-1.06-1.06l4.72-4.723L5.22 3.28a.75.75 0 0 1 0-1.06Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="right-side" data-v-c1476a23="">
                  <img
                    src="https://about.gitlab.com/images/homepage/card-flip-code-review.svg"
                    loading="lazy"
                  />
                </div>
              </div>
            </li>
            <li className="card card-3 security" data-v-c1476a23="">
              <div className="left-side security" data-v-c1476a23="">
                <div className="pill" data-v-c1476a23="">
                  Security
                </div>
                <h3
                  className="slp-text-heading3-bold card-title"
                  data-v-64ad2128=""
                  data-v-c1476a23=""
                >
                  Security built in, not bolted on
                </h3>
                <p
                  className="slp-text-body1 slp-mt-16"
                  data-v-64ad2128=""
                  data-v-c1476a23=""
                >
                  Automated scans integrate seamlessly with your pipelines.
                </p>
                <a
                  data-ga-name="security"
                  data-ga-location="cards"
                  className="slp-mt-24 slp-btn slp-btn-tertiary slp-mt-24"
                  href="/solutions/security-compliance/"
                  data-v-c6fd7cb9=""
                  data-v-c1476a23=""
                >
                  Learn more about Security and Compliance{" "}
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="slp-icon slp-icon slp-icon--size-sm slp-icon--color-color-text-300"
                    role="img"
                    aria-hidden="true"
                    data-icon-name=""
                    data-v-b82aeda9=""
                    data-v-c1476a23=""
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.22 2.22a.75.75 0 0 1 1.06 0l5.252 5.252a.75.75 0 0 1 0 1.06L6.28 13.784a.75.75 0 1 1-1.06-1.06l4.72-4.723L5.22 3.28a.75.75 0 0 1 0-1.06Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="right-side hidden md:block" data-v-c1476a23="">
                <img
                  src="https://about.gitlab.com/images/homepage/card-flip-security.svg"
                  loading="lazy"
                  data-v-c1476a23=""
                />
              </div>
            </li>
            <li className="card card-4 devsecops" data-v-c1476a23="">
              <div className="left-side devsecops" data-v-c1476a23="">
                <div className="pill" data-v-c1476a23="">
                  DevSecOps
                </div>
                <h3
                  className="slp-text-heading3-bold card-title"
                  data-v-64ad2128=""
                  data-v-c1476a23=""
                >
                  Unified DevSecOps workflows
                </h3>
                <p
                  className="slp-text-body1 slp-mt-16"
                  data-v-64ad2128=""
                  data-v-c1476a23=""
                >
                  Automate and track your CI/CD pipelines from code commit to
                  production in one platform.
                </p>
                <a
                  data-ga-name="cicd"
                  data-ga-location="cards"
                  className="slp-mt-24 slp-btn slp-btn-tertiary slp-mt-24"
                  href="/solutions/continuous-integration/"
                  data-v-c6fd7cb9=""
                  data-v-c1476a23=""
                >
                  Explore CI/CD and Automation{" "}
                  <svg
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="slp-icon slp-icon slp-icon--size-sm slp-icon--color-color-text-300"
                    role="img"
                    aria-hidden="true"
                    data-icon-name=""
                    data-v-b82aeda9=""
                    data-v-c1476a23=""
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.22 2.22a.75.75 0 0 1 1.06 0l5.252 5.252a.75.75 0 0 1 0 1.06L6.28 13.784a.75.75 0 1 1-1.06-1.06l4.72-4.723L5.22 3.28a.75.75 0 0 1 0-1.06Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="right-side hidden md:block" data-v-c1476a23="">
                <img
                  src="https://about.gitlab.com/images/homepage/card-flip-code-review.svg"
                  loading="lazy"
                  data-v-c1476a23=""
                />
              </div>
            </li>
            <div className="buffer" data-v-c1476a23=""></div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default StackedCards;


