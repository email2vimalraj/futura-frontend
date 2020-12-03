import React from "react";
import { animated, useSpring } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuLink = ({ href, text }) => (
  <li>
    <a
      href={href}
      className="block relative tracking-widest h-12 leading-10 text-center border-b border-solid border-gray-50 border-opacity-20 hover:text-yellow-400"
    >
      {text}
    </a>
  </li>
);

const Menu = () => {
  return (
    <div className="menu pt-0 pr-8 pb-14 pl-8 h-auto md:pr-8 md:pl-8 md:pt-36 md:pb-0 md:h-full md:box-border">
      <ul className="menu-list mb-8 md:mb-0 text-white text-xs uppercase absolute max-w-xs right-8 left-8 list-none">
        <MenuLink href="/" text="Home" />
        <MenuLink href="/about" text="About Us" />
        <MenuLink href="/products" text="Products" />
        <MenuLink href="/" text="Projects" />
        <MenuLink href="/" text="News Events" />
        <MenuLink href="/" text="Technology" />
        <MenuLink href="/contactus" text="Contact Us" />
      </ul>

      <div className="copyrights hidden md:block bottom-2.5 text-white text-center top-auto absolute whitespace-nowrap">
        <div className="copyTxt pb-1.5 text-xs">
          &copy; Copyrights Reserved 2020
        </div>
        <div className="copyTitle text-sm uppercase">
          Futura Techdynamics Pvt. Ltd.
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const menuAnimProp = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2200,
  });

  return (
    <>
      <animated.div
        className={`nav-main absolute top-0 left-0 z-50 bg-black md:w-auto ${
          openMenu ? "w-full h-full" : "w-0 h-0"
        }`}
        style={{ ...menuAnimProp, zIndex: 60 }}
      >
        <nav
          className={`nav relative md:fixed h-full ${
            openMenu
              ? "w-full md:w-80 pt-4 md:pt-0 bg-black transition duration-500 ease-out"
              : "w-20 bg-transparent"
          }`}
          style={{ zIndex: 60 }}
        >
          <div
            className={`btn-menu hidden md:block absolute left-1/2 top-12 bg-black bg-opacity-20 p-2.5 rounded-br-2xl ${
              openMenu ? "-ml-8" : "-ml-2.5"
            }`}
          >
            <div
              className="btn-menu-i border border-solid border-white rounded-br-xl cursor-pointer w-10 h-10"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <img src="/logo.svg" alt="Futura" className="w-7 pt-1 pl-1" />
            </div>

            {!openMenu && (
              <span className="block uppercase text-center pt-3.5 text-white tracking-widest text-xs">
                Menu
              </span>
            )}
          </div>

          {openMenu && (
            <>
              <div className="w-full flex justify-center mb-6 md:hidden">
                <div
                  className="btn-menu-i border border-solid border-white rounded-br-xl cursor-pointer w-10 h-10 text-center"
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  <img src="/logo.svg" alt="Futura" className="w-7 pt-1 pl-1" />
                </div>
              </div>
              <Menu />

              <div className="social absolute whitespace-nowrap space-x-6 text-white text-md z-50 clearfix flex md:hidden bottom-10 justify-center w-full">
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
            </>
          )}
        </nav>
      </animated.div>

      <div
        className="pt-5 cursor-pointer md:hidden"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div className="flex flex-wrap container mx-auto justify-center h-6">
          <div className="flex rounded-br-xl border border-solid border-black justify-center absolute h-6 w-6 p-4">
            <div className="line-1 top-3 w-3 bg-black h-px absolute"></div>
            <div className="line-2 top-4 w-6 bg-black h-px absolute"></div>
            <div className="line-3 top-5 w-3 bg-black h-px absolute"></div>
          </div>
        </div>
        <div className="flex container mx-auto justify-center font-futuraBookRegular uppercase tracking-widest text-xs mt-4">
          <span>Menu</span>
        </div>
      </div>
    </>
  );
};

export default Nav;
