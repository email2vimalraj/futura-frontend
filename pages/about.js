import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../components/Layout";

const AboutBlock = ({ title, subtitle, children }) => (
  <div className="abtShortTip float-left w-4/12 block clear-right">
    <div>
      <div className="AbtTitle font-futuraBookRegular text-sm uppercase tracking wide font-bold float-left">
        <span className="text-gray-500">{title}</span>
        <span className="text-gray-400">{subtitle}</span>
      </div>

      <div className="abountCntTxt float-left pt-5 pl-5 pr-5 font-futuraBookRegular text-lg text-gray-500 leading-8 text-justify">
        {children}
      </div>

      <div className="pt-2.5 pb-2.5 w-full block float-left clear-right">
        <div className="mr-5 ml-5 border-b border-solid border-gray-400" />
      </div>

      <div className="w-full block float-left clear-right">
        <div className="float-right pt-2.5 mr-5 ml-5">
          <a href="#" className="text-black">
            <span className="font-futuraBookRegular text-sm font-italic pr-1.5">
              View More
            </span>
            <FontAwesomeIcon
              icon={["far", "arrow-alt-circle-right"]}
              className="text-xs"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <>
      <Layout>
        <div className="flex bg-white">
          <div className="border-r border-solid border-gray-900">
            <section className="relative z-10 clearfix bg-white h-screen">
              <div className="content-section container mx-auto relative w-screen clearfix flex">
                <div className="w-1/2 block float-left clear-right">
                  <div className="abtTitle font-futuraBookRegular text-sm uppercase tracking wide font-bold float-left">
                    <span className="text-gray-500">About Futura Tech</span>
                    <span className="text-gray-400">Dynamics</span>
                  </div>

                  <div className="abtCntTxt float-left pt-5 pl-5 pr-5 font-futuraBookRegular text-lg text-gray-500 leading-8 text-justify">
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

                <div className="w-4/12 block float-left clear-right">
                  <div className="abtImg">
                    <img
                      src="/AboutPage.jpg"
                      alt="About Futura"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="relative z-10 clearfix">
              <div className="content-section container mx-auto relative w-screen clearfix flex">
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
            className="bg-no-repeat bg-white w-full flex-grow-0"
          />
        </div>
      </Layout>
    </>
  );
}
