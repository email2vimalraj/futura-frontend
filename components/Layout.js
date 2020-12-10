import React from "react";
import { AuthContext } from "./AuthContext";
import Login from "./Login";
import Nav from "./Nav";

const Footer = ({ setShowLogin }) => {
  const { isLoggedIn, logout } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (isLoggedIn) {
      setShowLogin(false);
    }
  }, [isLoggedIn]);

  return (
    <footer className="footer bg-black text-white z-20 inline-block font-futuraBookRegular tracking-wider leading-8">
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-10 flex-nowrap p-4 container mx-auto justify-center">
        <div className="border lg:border-none border-solid border-gray-300 p-4 text-center text-gray-300 flex flex-col">
          <span
            className="uppercase text-xs font-bold lg:underline"
            style={{ textUnderlinePosition: "under" }}
          >
            About Futura
          </span>

          <ul className="uppercase mt-3 text-sm list-none text-center lg:text-left">
            <li className="mt-1">
              <a href="#">CSR Activity</a>
            </li>
            <li className="mt-1">
              <a href="/publications">Publications</a>
            </li>
            <li className="mt-1">
              <a href="#">R & D</a>
            </li>
            <li className="mt-1">
              {isLoggedIn ? (
                <div className="cursor-pointer" onClick={() => logout()}>
                  Sign Out
                </div>
              ) : (
                <div
                  className="cursor-pointer"
                  onClick={() => setShowLogin(true)}
                >
                  Sign In
                </div>
              )}
            </li>
          </ul>
        </div>

        <div className="border lg:border-none border-solid border-gray-300 p-4 text-center text-gray-300 flex flex-col">
          <span
            className="uppercase text-xs font-bold lg:underline"
            style={{ textUnderlinePosition: "under" }}
          >
            Know More
          </span>

          <ul className="uppercase mt-3 text-sm list-none text-center lg:text-left">
            <li className="mt-1">
              <a href="#">Testimonials</a>
            </li>
            <li className="mt-1">
              <a href="#">Case Study</a>
            </li>
            <li className="mt-1">
              <a href="#">News & Events</a>
            </li>
            <li className="mt-1">
              <a href="#">Company Info</a>
            </li>
          </ul>
        </div>

        <div className="border lg:border-none border-solid border-gray-300 p-4 text-center text-gray-300 flex flex-col">
          <span
            className="uppercase text-xs font-bold lg:underline"
            style={{ textUnderlinePosition: "under" }}
          >
            Latest Updates
          </span>

          <div className="flex flex-col mt-3">
            <input
              type="text"
              placeholder="please enter your email id"
              className="border-0 border-b border-solid border-gray-300 bg-gray-900 text-white outline-none h-10 text-xs w-full pl-2.5 border-box placeholder-white"
            />
            <span className="text-xs text-gray-400 mt-2">
              please drop in your valid email id to get more updates from us and
              keep in touch
            </span>
            <button className="uppercase bg-gray-50 text-black ml-auto p-2 text-sm mt-2 outline-none">
              Subscribe
            </button>
          </div>
        </div>

        <div className="border lg:border-none border-solid border-gray-300 p-4 text-center text-gray-300 flex flex-col">
          <div className="flex flex-col text-sm">
            <span
              className="uppercase text-xs font-bold mb-2 lg:underline"
              style={{ textUnderlinePosition: "under" }}
            >
              Info
            </span>

            <div className="flex flex-col text-center lg:text-left">
              <span className="text-xs">&copy; copyright reserved 2020</span>
              <span className="uppercase">Futura Techdynamics Pvt. Ltd.</span>
            </div>

            <span
              className="m-3 uppercase text-xs font-bold lg:underline"
              style={{ textUnderlinePosition: "under" }}
            >
              Branches
            </span>

            <div className="flex flex-col text-center lg:text-left">
              <span className="uppercase">H.O.: Egmore, Chennai</span>
              <span className="uppercase">B.O.: Pune, Mumbai, Kolkata</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pl-12 pr-12 text-xs leading-4 m-2 container mx-auto">
        <div className="border-t border-solid border-gray-400 pt-4">
          All content included on the website, such as text, graphics, logos,
          button icons, images, audio clips, digital downloads, data
          compilations, and software, is the property of FUTURA TECHDYNAMICS
          PVT. LTD., its affiliates or its content suppliers and is protected by
          India and international copyright.
        </div>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <div className="w-screen h-screen bg-white relative">
      {showLogin && <Login onClose={() => setShowLogin(false)} />}

      <Nav />

      <div className="sections-wrap relative flex flex-col">
        {children}

        <Footer setShowLogin={setShowLogin} />
      </div>
    </div>
  );
};

export default Layout;
