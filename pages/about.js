import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import TopProgressBar from "../components/TopProgressBar";

const AboutBlock = ({ title, subtitle, children }) => (
  <div className="border border-solid border-gray-300 md:border-none flex flex-col items-center p-3">
    <div className="uppercase">
      <span className="text-gray-500">{title} </span>
      <span className="text-gray-400">{subtitle}</span>
    </div>

    <div className="mt-4 pb-3 border-b border-solid border-gray-400 text-gray-900">
      {children}
    </div>

    <div className="ml-auto italic mt-3 text-sm">
      View More{" "}
      <FontAwesomeIcon
        icon={["far", "arrow-alt-circle-right"]}
        className="text-xs"
      />
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <>
      <Layout>
        <TopProgressBar />

        <div className="flex">
          <div className="flex flex-col bg-white container mx-auto justify-start pt-10 mr-0 items-center">
            <img
              src="/FuturaLogoDark.svg"
              alt="Futura Logo"
              className="p-8 lg:hidden"
            />

            <section className="p-4">
              <div className="flex flex-wrap lg:flex-nowrap">
                <div className="font-futuraBookRegular tracking-wider leading-8 w-full">
                  <div>
                    <span className="text-gray-500">About Futura Tech</span>
                    <span className="text-gray-400">Dynamics</span>
                  </div>

                  <img
                    src="/AboutPage.jpg"
                    alt="About Futura"
                    className="border border-solid border-gray-300 lg:border-none p-3 lg:p-0 lg:hidden m-auto mb-3 mt-3"
                  />

                  <div>
                    <p>
                      With over a decade of rich experience in architectural
                      lighting FUTURA is an established entity in the lighting
                      industry. Our quest is to enhance the inspiration of
                      architects, interior and lighting designers with the best
                      in its class lighting products.
                      <br />
                      <br />
                      We have invested in the areas of product development to
                      enhance product design and technical excellence to bring
                      out a vast range to suit every need. Our in house R&D,
                      Test and Measurement facilities gives added confidence to
                      our customers.
                      <br />
                      <br />
                      We have enhanced our service capabilities to include
                      professional technical support and a modern warehouse.
                      Albeit investing in technology we have also invested in
                      people be it our dealers or channel partners who are
                      dedicated lighting professionals.
                      <br />
                      <br />
                      Our products are chosen responsibly for their aesthetic
                      appeal keeping in mind the energy efficiency and our
                      commitment towards environmental impact.
                      <br />
                      <br />
                      WELCOME TO FUTURA your PARTNERS BEYOND LIGHT
                    </p>
                  </div>
                </div>

                <img
                  src="/AboutPage.jpg"
                  alt="About Futura"
                  className="w-full h-full lg:w-1/2 lg:h-1/2 border border-solid border-gray-300 md:border-none p-3 md:p-0 hidden lg:block"
                />
              </div>

              <div className="mt-10 md:mt-16 flex flex-col md:flex-row space-y-3 space-x-0 md:space-x-3 md:space-y-0 font-futuraBookRegular tracking-wide leading-7">
                <AboutBlock title="About Futura Tech " subtitle="Dynamics">
                  Lorem ipsum dolor sit amet consectetur adipisicing, elit.
                  Distinctio, officiis ullam. Similique fuga tempora reiciendis,
                  quisquam in repudiandae atque, consectetur aliquam esse odio
                  provident asperiores, eveniet nobis dolores soluta tenetur.
                </AboutBlock>

                <AboutBlock title="Mission & " subtitle="Vision">
                  Lorem ipsum dolor sit amet consectetur adipisicing, elit.
                  Distinctio, officiis ullam. Similique fuga tempora reiciendis,
                  quisquam in repudiandae atque, consectetur aliquam esse odio
                  provident asperiores, eveniet nobis dolores soluta tenetur.
                </AboutBlock>

                <AboutBlock title="Awards & " subtitle="Accolades">
                  Lorem ipsum dolor sit amet consectetur adipisicing, elit.
                  Distinctio, officiis ullam. Similique fuga tempora reiciendis,
                  quisquam in repudiandae atque, consectetur aliquam esse odio
                  provident asperiores, eveniet nobis dolores soluta tenetur.
                </AboutBlock>
              </div>
            </section>
          </div>

          <div
            style={{ backgroundImage: "url(/LogoRight.jpg)" }}
            className="w-1/12 bg-no-repeat bg-right-bottom hidden lg:block"
          />
        </div>
      </Layout>
    </>
  );
}
