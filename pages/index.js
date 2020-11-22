import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousell from "../components/Carousell";
import Layout from "../components/Layout";

const ContentSection = () => {
  return (
    <section className="relative z-10 clearfix inline-block">
      <div className="content-section pt-28 pb-36 pl-56 my-0 mx-auto relative w-screen">
        <div className="weare block float-left clear-right w-2/6">
          <a
            href="/"
            className="relative w-auto h-96 block overflow-hidden p-5"
          >
            <div className="line-1 w-full top-0 left-0 h-0.5 bg-black absolute">
              <i className="left-0 top-0 block absolute h-full" />
            </div>
            <div className="line-2 h-full top-0 right-0 w-0.5 bg-black absolute">
              <i className="left-0 top-0 block absolute w-full" />
            </div>
            <div className="line-3 w-full right-0 bottom-0 h-0.5 bg-black absolute">
              <i className="right-0 top-0 block absolute h-full" />
            </div>
            <div className="line-4 h-full left-0 bottom-0 w-0.5 bg-black absolute">
              <i className="bottom-0 left-0 block absolute w-full" />
            </div>
            <div
              style={{ backgroundImage: `url(/home/homeAbt.jpg)` }}
              className="w-full h-full bg-cover bg-no-repeat"
            />
          </a>
        </div>

        <div className="wearetextbx float-left w-6/12 pl-5 pr-5 text-xl text-gray-600 leading-9 text-justify font-futuraBookRegular">
          <p>
            With over a decade of rich experience in architectural lighting
            FUTURA is an established entity in the lighting industry. Our quest
            is to enhance the inspiration of architects, interior and lighting
            designers with the best in its class lighting products.
          </p>
          <br />
          <p>
            We have invested in the areas of product development to enhance
            product design and technical excellence to bring out a vast range to
            suit every need. Our in house R&D, Test and Measurement facilities
            gives added confidence to our customers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <Layout>
      <div className="social absolute top-10 right-10 whitespace-nowrap flex space-x-3 text-white text-md z-50 clearfix">
        <a href="/" title="Facebook" target="_blank">
          <FontAwesomeIcon icon={["fab", "facebook-square"]} />
        </a>

        <a href="/" title="Instagram" target="_blank">
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>

        <a href="/" title="youtube" target="_blank">
          <FontAwesomeIcon icon={["fab", "youtube"]} />
        </a>

        <a href="/" title="Mail Us" target="_blank">
          <FontAwesomeIcon icon="envelope" />
        </a>

        <a href="/" title="Linked In" target="_blank">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>

        <a href="/" title="Our Twitter" target="_blank">
          <FontAwesomeIcon icon={["fab", "twitter-square"]} />
        </a>
      </div>

      <Carousell />

      <ContentSection />
    </Layout>
  );
}
