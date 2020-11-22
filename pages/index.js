import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousell from "../components/Carousell";
import Nav from "../components/Nav";

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

const Footer = () => {
  return (
    <footer className="footer relative bg-black text-white z-20 inline-block font-futuraBookRegular">
      <div className="footer-wrap relative pt-14 pb-14 pl-56 pr-28 my-0 mx-auto w-screen">
        <div className="footer-i clearfix relative">
          <div className="phone float-left w-1/5 pb-20">
            <strong className="uppercase text-sm leading-3 pl-16 block relative pb-8 tracking-wider">
              About Futura
            </strong>
            <ul className="list-none">
              <li className="block pb-1 leading-5 uppercase text-sm">
                <a href="/">CSR Activity</a>
              </li>
              <li className="block pb-1 leading-5 uppercase text-sm">
                <a href="/">Publication</a>
              </li>
              <li className="block pb-1 leading-5 uppercase text-sm">
                <a href="/">R & D</a>
              </li>
              <li className="block pb-1 leading-5 uppercase text-sm">
                <a href="/">Sign In</a>
              </li>
            </ul>
          </div>
          <div className="phone float-left w-1/5 pb-20">
            <strong className="uppercase text-sm leading-3 pl-16 block relative pb-8 tracking-wider">
              Know More
            </strong>
            <ul className="list-none">
              <li className="block pb-1 leading-5 uppercase text-sm">
                <a href="/">Testimonials</a>
              </li>
              <li className="block pb-1 leading-5 uppercase text-sm">
                <a href="/">Case Study</a>
              </li>
              <li className="block pb-1 leading-5 uppercase text-sm">
                <a href="/">News & Events</a>
              </li>
              <li className="block pb-1 leading-5 uppercase text-sm">
                <a href="/">Company Info</a>
              </li>
            </ul>
          </div>
          <div className="phone float-left w-50 pb-20">
            <strong className="uppercase text-sm leading-3 pl-16 block relative pb-8 tracking-wider">
              Latest Updates
            </strong>
            <ul className="list-none">
              <li className="block pb-1 pl-5 pr-5 leading-5 uppercase text-sm">
                <input
                  type="email"
                  placeholder="please enter your email id"
                  className="border-0 border-b border-solid border-gray-300 bg-gray-900 text-white outline-none h-10 text-xs w-full pl-2.5 border-box relative z-10 placeholder-white"
                />
              </li>
              <li className="block pb-1 leading-5 text-sm">
                <div className="inputtext text-xs text-gray-500 pt-2.5 pb-2.5 pr-5 pl-5 leading-4">
                  please drop in your valid email id to get more updates from us
                  and keep in touch
                </div>
              </li>
              <li className="block pb-1 leading-5 uppercase text-sm">
                <button className="p-2.5 text-sm uppercase float-right border-none mr-10 bg-white text-gray-600">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>

          <div className="phone float-left w-1/5 pb-20 inline-block">
            <div className="float-left clear-right w-full pb-5">
              <strong className="uppercase text-sm leading-3 pl-16 block relative pb-8 tracking-wider">
                Info
              </strong>
              <ul className="list-none">
                <li className="block pb-1 leading-5 text-sm">
                  <a href="/">&copy; copyright reserved 2020</a>
                </li>
                <li className="block pb-1 leading-5 uppercase text-sm">
                  <a href="/">Futura Techdynamics Pvt. Ltd.</a>
                </li>
              </ul>
            </div>

            <div className="float-left clear-right w-full">
              <strong className="uppercase text-sm leading-3 pl-16 block relative pb-8 tracking-wider">
                Branches
              </strong>
              <span className="uppercase">H.O. : Egmore, Chennai</span>
              <br />
              <span className="uppercase">B.O. : Pune, Mumbai, Kolkatta</span>
            </div>
          </div>
        </div>

        <div className="footer-i clearfix relative inline-block">
          <div className="footercnt border-t border-gray-500 text-xs tracking-wider leading-9">
            All content included on the website, such as text, graphics, logos,
            button icons, images, audio clips, digital downloads, data
            compilations, and software, is the property of FUTURA TECHDYNAMICS
            PVT. LTD. , its affiliates or its content suppliers and is protected
            by India and international copyright.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-600 relative">
      <Nav />

      <div className="sections-wrap relative">
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

        <Footer />
      </div>
    </div>
  );
}
