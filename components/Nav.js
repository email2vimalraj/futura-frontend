import React from "react";

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
    <div className="menu pr-8 pl-8 pt-36 pb-0 h-full box-border">
      <ul className="menu-list text-white text-xs uppercase absolute max-w-xs right-8 left-8 list-none">
        <MenuLink href="/" text="Home" />
        <MenuLink href="/" text="About Us" />
        <MenuLink href="/" text="Projects" />
        <MenuLink href="/" text="News Events" />
        <MenuLink href="/" text="Technology" />
        <MenuLink href="/" text="Contact Us" />
      </ul>

      <div className="copyrights bottom-2.5 text-white text-center top-auto absolute whitespace-nowrap">
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

  return (
    <div className="nav-main absolute top-0 left-0 z-50">
      <nav
        className={`nav fixed h-full ${
          openMenu ? "w-80 bg-black" : "w-20 bg-transparent"
        }`}
      >
        <div
          className={`btn-menu absolute left-1/2 top-12 bg-black bg-opacity-20 p-2.5 rounded-br-2xl ${
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

        {openMenu && <Menu />}
      </nav>
    </div>
  );
};

export default Nav;
