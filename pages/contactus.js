import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import TopProgressBar from "../components/TopProgressBar";

export default function ContactUs() {
  const [preloaderFinished, setPreloaderFinished] = React.useState(false);

  if (!preloaderFinished)
    return (
      <TopProgressBar preloaderFinished={() => setPreloaderFinished(true)} />
    );

  return (
    <Layout>
      <div className="flex p-2 md:p-0 md:container md:mx-auto justify-center">
        <div className="flex flex-col bg-white container mx-auto justify-start pt-10 mr-0">
          <div className="flex font-futuraBookRegular text-sm border-b border-solid border-black mb-4 pb-2">
            <div className="uppercase">
              <span>Contact</span>
            </div>
          </div>

          <div className="flex flex-col p-2 md:p-0">
            <a href="https://goo.gl/maps/MNpXpC3GVQJDqUJC9" target="_blank">
              <img src="/map.png" alt="Map" />
            </a>

            <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 mt-3 mb-5">
              <div className="flex flex-col font-futuraBookRegular w-full md:w-3/2">
                <span className="uppercase text-gray-500 mb-2">
                  Drop your details, we will contact you!
                </span>

                <form className="flex flex-col">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    className="uppercase bg-gray-200 p-2"
                  />
                  <span className="text-gray-400 text-xs italic p-2">
                    please enter your full name
                  </span>

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Id"
                    className="uppercase bg-gray-200 p-2"
                  />
                  <span className="text-gray-400 text-xs italic p-2">
                    please enter your complete email id
                  </span>

                  <input
                    type="text"
                    placeholder="Mobile number"
                    className="uppercase bg-gray-200 p-2"
                  />
                  <span className="text-gray-400 text-xs italic p-2">
                    please enter your valid mobile number country extension "+91
                    9*****"
                  </span>

                  <textarea
                    placeholder="Enter your Comments"
                    className="uppercase bg-gray-200 p-2"
                    rows={3}
                  />
                  <span className="text-gray-400 text-xs italic p-2">
                    please enter your comments not more than 160 words
                  </span>

                  <button
                    type="button"
                    className="uppercase bg-yellow-400 w-1/3 ml-auto p-2"
                  >
                    <FontAwesomeIcon icon={["fas", "location-arrow"]} />
                    &nbsp; Submit
                  </button>
                </form>
              </div>

              <div className="flex flex-col space-y-4 mt-3 font-futuraBookRegular text-gray-500 w-full">
                <div className="flex flex-col bg-gray-200 p-2">
                  <span className="uppercase text-lg tracking-wider text-gray-600">
                    Registered Head office
                  </span>

                  <div className="flex items-center space-x-4 p-2">
                    <FontAwesomeIcon icon="building" />
                    <div className="tracking-wide leading-6">
                      <p className="text-lg font-extrabold">
                        Futura Techdynamics Pvt. Ltd.
                      </p>
                      <p>
                        No. 8, Ruckmani Lakshmipathi Salai, Egmore, Chennai,
                        Tamil Nadu 600008
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-2">
                    <FontAwesomeIcon icon="envelope-square" />
                    <div className="tracking-wide leading-6">
                      <p>info@futuralights.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-2">
                    <FontAwesomeIcon icon="phone-square-alt" />
                    <div className="tracking-wide leading-6">
                      <p>+9144 4218 7744 / 4219 9977</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-200 p-2 uppercase text-lg flex text-gray-600 items-center">
                  <span>Your Nearby Branches</span>
                  <FontAwesomeIcon
                    icon="arrow-circle-down"
                    className="ml-auto"
                  />
                </div>

                <div className="flex flex-col border border-solid border-gray-200">
                  <div className="flex items-center space-x-4 p-2">
                    <FontAwesomeIcon icon="building" />
                    <div className="tracking-wide leading-6">
                      <p className="text-lg font-extrabold">Spark Lites</p>
                      <p>
                        No. 8, Ruckmani Lakshmipathi Salai, Egmore, Maharastra
                        600008
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-2">
                    <FontAwesomeIcon icon="envelope-square" />
                    <div className="tracking-wide leading-6">
                      <p>info@futuralights.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-2">
                    <FontAwesomeIcon icon="phone-square-alt" />
                    <div className="tracking-wide leading-6">
                      <p>+9154 4218 7744 / 4219 9977</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
