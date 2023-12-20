import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  console.log(openMenu)
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img
          src="./logo.png"
          alt="word Homyz in front of black diagonal lines with a blue accent"
          width={100}
        />
        <OutsideClickHandler onOutsideClick={() => {
          setOpenMenu(false)
        }}>
        <div className={`flexCenter h-menu ${openMenu ? '' : 'hidden'}`}>
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setOpenMenu (prev => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
