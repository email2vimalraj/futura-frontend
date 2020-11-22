import Nav from "./Nav";

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

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-gray-600 relative">
      <Nav />

      <div className="sections-wrap relative">
        {children}

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
